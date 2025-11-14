# Integração iOS - AppsFlyer + Amplitude

> **Documentação para o time iOS**
>
> Este documento explica **O QUE** precisa ser feito no app e **POR QUÊ**, mas não prescreve **COMO**.
> Use sua arquitetura e padrões existentes para implementar.

---

## Contexto

A Landing Page está capturando um **anonymous_id** (UUID) que identifica cada visitante da web. Quando o usuário clica em "Download", este ID é passado via OneLink do AppsFlyer. O app precisa:

1. Receber este ID do OneLink
2. Enviar para o Amplitude

**Por quê?** Para conectar os eventos da web (visitas, cliques) com os eventos do app (uso, compras) em um único perfil de usuário no Amplitude.

---

## Requisito 1: Extrair anonymous_id do Deep Link

### O QUE fazer:
Quando o app abre via OneLink, extrair o parâmetro `af_sub1` que contém o anonymous_id.

### POR QUÊ:
Este é o mesmo ID que identificou o usuário na Landing Page. Precisamos dele para o próximo passo.

### Onde o ID vem:
A OneLink tem este formato:
```
https://napfy.onelink.me/RAwm/daa4bnyw?af_sub1=abc-123-def-456&utm_source=instagram
```

O valor de `af_sub1` é o anonymous_id.

### Exemplo de implementação (Swift):

**Opção A: Usando URLComponents** (se você faz parsing manual)
```swift
func application(_ application: UIApplication,
                 continue userActivity: NSUserActivity,
                 restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {

    guard userActivity.activityType == NSUserActivityTypeBrowsingWeb,
          let url = userActivity.webpageURL,
          let components = URLComponents(url: url, resolvingAgainstBaseURL: true),
          let queryItems = components.queryItems else {
        return false
    }

    // Extrair af_sub1
    if let anonymousId = queryItems.first(where: { $0.name == "af_sub1" })?.value {
        print("Anonymous ID from web: \(anonymousId)")
        // Guardar para usar no próximo passo
        UserDefaults.standard.set(anonymousId, forKey: "web_anonymous_id")
    }

    return true
}
```

**Opção B: Usando AppsFlyer SDK callback** (se você já usa)
```swift
extension AppDelegate: AppsFlyerLibDelegate {
    func onConversionDataSuccess(_ conversionInfo: [AnyHashable: Any]) {
        // AppsFlyer já faz o parsing dos parâmetros
        if let anonymousId = conversionInfo["af_sub1"] as? String {
            print("Anonymous ID from web: \(anonymousId)")
            UserDefaults.standard.set(anonymousId, forKey: "web_anonymous_id")
        }
    }
}
```

**Opção C: Seu próprio sistema de deep linking**
Se você tem um router customizado de deep links, extraia `af_sub1` usando seu padrão existente.

---

## Requisito 2: Enviar anonymous_id para o Amplitude

### O QUE fazer:
Chamar o Amplitude SDK para definir o `userId` como sendo o anonymous_id que você extraiu.

### POR QUÊ:
Isso diz ao Amplitude: "Este usuário do app é a mesma pessoa que visitou a web com este ID".
O Amplitude automaticamente vai **mesclar** todos os eventos da web com os eventos do app em um único perfil.

### QUANDO fazer:
**Antes** de enviar qualquer outro evento do Amplitude no app.
Idealmente logo após o app abrir pela primeira vez via OneLink.

### Exemplo de implementação (Swift):

**Usando Amplitude SDK**
```swift
import Amplitude

// Logo após extrair o anonymous_id do deep link
if let anonymousId = UserDefaults.standard.string(forKey: "web_anonymous_id") {
    // Diz ao Amplitude que este é o mesmo usuário da web
    Amplitude.instance().setUserId(anonymousId)

    print("✅ Amplitude userId set to: \(anonymousId)")
}

// Agora pode enviar eventos normalmente
Amplitude.instance().logEvent("app_opened", withEventProperties: [
    "platform": "ios",
    "source": "onelink"
])
```

### Importante:
- Só precisa chamar `setUserId()` **uma vez** (no primeiro app open via OneLink)
- Depois disso, todos os eventos do app vão estar automaticamente conectados à sessão web
- Se o usuário já tinha usado o app antes (sem vir da web), não tem problema - o Amplitude vai manter ambos os perfis até conseguir conectar

---

## Requisito 3: Identificar eventos como plataforma iOS

### O QUE fazer:
Adicionar uma propriedade `platform: "ios"` em todos os eventos do Amplitude.

### POR QUÊ:
Permite filtrar no dashboard: eventos da web (`platform: "web"`) vs eventos do app (`platform: "ios"`).

### Exemplo:
```swift
// Em vez de:
Amplitude.instance().logEvent("feature_used")

// Fazer:
Amplitude.instance().logEvent("feature_used", withEventProperties: [
    "platform": "ios",
    "feature_name": "sleep_tracker"
])
```

Ou configurar globalmente:
```swift
// No setup do Amplitude
let identify = AMPIdentify()
identify.set("platform", value: "ios" as NSObject)
Amplitude.instance().identify(identify)
```

---

## Validação - Como saber se funcionou?

### Passo 1: Teste com TestFlight

1. Distribua build via TestFlight
2. No iPhone, abra Safari e acesse:
   ```
   https://napfy.onelink.me/RAwm/daa4bnyw?af_sub1=TEST_ID_12345
   ```
3. Clique para abrir o app
4. No código, adicione log temporário:
   ```swift
   print("✅ anonymous_id received: \(anonymousId)")
   print("✅ Amplitude setUserId called")
   ```

### Passo 2: Verificar no Amplitude Dashboard

1. Acesse: https://analytics.amplitude.com
2. Vá em **User Lookup**
3. Busque pelo ID que você usou: `TEST_ID_12345`
4. Você deve ver:
   - Eventos com `platform=web` (da Landing Page)
   - Eventos com `platform=ios` (do app)
   - Ambos no mesmo perfil de usuário

### Passo 3: Verificar no AppsFlyer Dashboard

1. Acesse: https://hq1.appsflyer.com
2. Vá em **Dashboard → Installs**
3. Clique em um install recente
4. Em "Custom Parameters", você deve ver: `af_sub1: <anonymous_id>`

---

## Fluxo Completo (Diagrama)

```
┌─────────────────────────────────────────────────┐
│ 1. Usuário visita Landing Page                  │
│    • Gera anonymous_id: "abc-123"               │
│    • Amplitude registra: página vista           │
│    • Armazena em localStorage                   │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 2. Usuário clica em "Download App"              │
│    • Amplitude registra: click_download_app     │
│    • Redireciona para OneLink com af_sub1       │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 3. App Store abre                                │
│    • Usuário baixa e instala o app              │
│    • AppsFlyer registra: install                │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 4. Usuário abre o app via OneLink               │
│    • iOS chama universal link handler           │
│    • App extrai af_sub1 = "abc-123"             │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 5. App envia para Amplitude                     │
│    • setUserId("abc-123")                       │
│    • Amplitude MESCLA eventos web + app         │
│    • logEvent("app_opened", platform: "ios")    │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 6. Resultado no Amplitude Dashboard             │
│                                                  │
│  User: abc-123                                   │
│  ├─ [WEB] page_view (1 min atrás)               │
│  ├─ [WEB] click_download_app (30s atrás)        │
│  ├─ [iOS] app_opened (agora)                    │
│  └─ [iOS] feature_used (agora)                  │
│                                                  │
│  Funil completo: LP → Download → Uso            │
└─────────────────────────────────────────────────┘
```

---

## Perguntas Frequentes

### Q: E se o usuário já tem o app instalado?
**R:** O OneLink abre o app diretamente. O deep link handler vai receber o `af_sub1` normalmente.

### Q: E se o usuário instala, mas não abre via OneLink?
**R:** Não tem problema. O `af_sub1` não vai estar presente, então você simplesmente não chama `setUserId()`. O Amplitude trata como usuário novo sem histórico web (que é correto).

### Q: Precisa chamar setUserId toda vez que o app abre?
**R:** **Não**. Só precisa chamar uma vez (no primeiro app open via OneLink). Depois disso, o Amplitude já sabe que é o mesmo usuário.

### Q: E se chamar setUserId múltiplas vezes com IDs diferentes?
**R:** O Amplitude vai criar/mesclar perfis. Não é ideal, mas não quebra. Recomendação: guardar um flag de "já sincronizou" para não chamar novamente.

### Q: Como testar em desenvolvimento (Xcode)?
**R:** Use um custom URL scheme para simular o deep link:
```swift
// No SceneDelegate ou AppDelegate
func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    if let url = URLContexts.first?.url {
        // Simula OneLink: myapp://test?af_sub1=DEV_TEST_123
        handleDeepLink(url)
    }
}
```

### Q: O AppsFlyer SDK é obrigatório?
**R:** **Não** para este fluxo. Você pode extrair `af_sub1` manualmente via URLComponents.
O AppsFlyer SDK ajuda com atribuição e outras features, mas não é necessário apenas para pegar o parâmetro.

### Q: E se o usuário limpar os dados do app?
**R:** O `anonymous_id` vai ser perdido (se estava em UserDefaults). Na próxima vez que ele abrir via OneLink, vai receber um **novo** anonymous_id da web. O Amplitude vai criar um perfil separado (esperado, já que não dá pra saber que é o mesmo usuário).

---

## Integração com RevenueCat

Vocês já usam RevenueCat user ID. Este fluxo **não interfere** com isso:

- **RevenueCat user ID**: Identifica assinaturas e compras (permanece como está)
- **Amplitude anonymous_id**: Identifica jornada web→app (novo, complementar)

No futuro, vocês podem querer conectar ambos:
```swift
// Quando usuário faz login ou assina
let revenueCatUserId = Purchases.shared.appUserID
Amplitude.instance().setUserId(revenueCatUserId) // Sobrescreve anonymous_id

// Ou mantém ambos:
let identify = AMPIdentify()
identify.set("revenuecat_user_id", value: revenueCatUserId as NSObject)
Amplitude.instance().identify(identify)
```

Mas isso é **opcional** e pode ser decidido depois.

---

## Checklist de Implementação

- [ ] Extrair `af_sub1` do deep link (escolher Opção A, B ou C)
- [ ] Guardar anonymous_id recebido (UserDefaults, Keychain, etc)
- [ ] Chamar `Amplitude.setUserId(anonymous_id)` no primeiro app open
- [ ] Adicionar `platform: "ios"` aos eventos do Amplitude
- [ ] Adicionar logs temporários para debug
- [ ] Testar com build TestFlight + OneLink customizada
- [ ] Validar no Amplitude Dashboard (User Lookup)
- [ ] Validar no AppsFlyer Dashboard (Custom Parameters)
- [ ] Remover logs de debug antes do release
- [ ] Documentar no código onde está o handling do anonymous_id

---

## Suporte

**Dúvidas sobre este fluxo?**
- Revisar [plan.md](plan.md) para visão geral da arquitetura
- Testar com URL customizada: `https://napfy.onelink.me/RAwm/daa4bnyw?af_sub1=SEU_TESTE`

**Documentação Oficial:**
- [Amplitude iOS SDK](https://www.docs.developers.amplitude.com/data/sdks/ios/)
- [AppsFlyer Deep Linking](https://dev.appsflyer.com/hc/docs/ios-sdk-reference-appsflyerlib)
- [Apple Universal Links](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app)

---

*Última atualização: 2025-11-14*
