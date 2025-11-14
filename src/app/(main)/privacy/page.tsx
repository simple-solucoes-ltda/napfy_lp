import { Container } from '@/components/Container'

export default function Privacy() {
  return (
    <div className="py-20 sm:py-32 text-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-medium tracking-tight text-white mb-8">
            POLÍTICA DE PRIVACIDADE DO NAPFY
          </h1>

          <p className="text-gray-300 mb-8">Data de vigência: 14/11/2025</p>

          <p className="text-gray-200 mb-8">
            A Simple Soluções LTDA (&quot;nós&quot;) respeita sua privacidade e a de sua família. Esta política explica nossas práticas.
          </p>

          <div className="space-y-8 text-gray-200">
            <section>
              <h2 className="text-2xl font-medium text-white mb-3">1. INFORMAÇÕES QUE COLETAMOS</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">1.1. DADOS ARMAZENADOS LOCALMENTE (em seu dispositivo):</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Nome do bebê</li>
                    <li>Data de nascimento</li>
                    <li>Foto (opcional)</li>
                    <li>Registros de sono e vigília</li>
                  </ul>
                  <p className="mt-2 text-napfy-teal font-medium">Importante: Estes dados NÃO são enviados para nossos servidores</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">1.2. DADOS DE USO (anonimizados):</h3>
                  <p className="mb-3">Utilizamos serviços de análise para melhorar o app. Todos os dados são anonimizados:</p>

                  <div className="space-y-4 ml-4">
                    <div>
                      <p className="font-medium text-white mb-1">Firebase Analytics:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Modelo do dispositivo e versão do iOS</li>
                        <li>Eventos de interação (ex: "usuário visualizou tela X")</li>
                        <li>Estatísticas de uso do app</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-white mb-1">Amplitude Analytics:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Análise de comportamento do usuário (fluxos de navegação)</li>
                        <li>Eventos de produto (sem dados pessoais)</li>
                        <li>Métricas de retenção e engajamento</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-white mb-1">Amplitude Session Replay (1% das sessões):</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Gravações de tela de forma completamente anônima</li>
                        <li>Apenas 1% das sessões são gravadas aleatoriamente</li>
                        <li>Dados sensíveis (senhas, pagamentos) são automaticamente mascarados</li>
                        <li className="text-napfy-teal">Dados de sono do bebê NÃO são incluídos (ficam locais)</li>
                      </ul>
                      <p className="mt-2 text-sm">Você pode desativar via "Não Permitir Rastreamento" no iOS</p>
                    </div>

                    <div>
                      <p className="font-medium text-white mb-1">AppsFlyer (Atribuição de Marketing):</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Rastreamento de instalação (de onde você nos descobriu)</li>
                        <li>IDFA (Identificador de Publicidade) - apenas se você permitir via ATT</li>
                        <li>Dados de atribuição de campanha</li>
                        <li className="text-napfy-teal">Nenhum dado de sono é compartilhado</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-white mb-1">RevenueCat (Gerenciamento de Assinaturas):</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>ID de usuário anônimo (gerado automaticamente)</li>
                        <li>Status de assinatura (ativo, expirado, etc.)</li>
                        <li>Histórico de compras (para restaurar acesso)</li>
                        <li className="text-napfy-teal">Nenhum dado pessoal ou de sono</li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-4 text-napfy-teal font-medium">Importante: Nenhum desses serviços tem acesso aos dados de sono do seu bebê (que ficam locais)</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">2. APP TRACKING TRANSPARENCY (ATT)</h2>
              <p className="mb-4">
                Durante o primeiro uso do app, solicitamos sua permissão para rastreamento via <strong>App Tracking Transparency (ATT)</strong> da Apple.
              </p>

              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">✅ O que acontece se você PERMITIR:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>AppsFlyer coleta IDFA para atribuição precisa de marketing</li>
                    <li>Nos ajuda a melhorar campanhas e experiência do app</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">❌ O que acontece se você NEGAR:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li className="text-napfy-teal font-medium">O app funciona 100% normalmente (nenhuma funcionalidade bloqueada)</li>
                    <li>AppsFlyer funciona em modo limitado (via SKAdNetwork da Apple)</li>
                    <li>Análises continuam funcionando de forma anônima (Firebase/Amplitude)</li>
                  </ul>
                </div>

                <p className="text-sm">
                  <strong>Você pode mudar sua escolha a qualquer momento:</strong> Configurações do iOS → Napfy → Permitir Rastreamento
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">3. COMO USAMOS AS INFORMAÇÕES</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">3.1. DADOS LOCAIS:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Calcular janelas de sono</li>
                    <li>Enviar notificações locais</li>
                    <li>Gerar relatórios de sono</li>
                  </ul>
                  <p className="mt-2">Estes dados permanecem em seu dispositivo</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">3.2. DADOS ANALÍTICOS:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Melhorar funcionalidades</li>
                    <li>Corrigir problemas</li>
                    <li>Entender padrões de uso</li>
                  </ul>
                  <p className="mt-2">Sempre de forma anonimizada</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">4. SERVIÇOS DE TERCEIROS UTILIZADOS</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">4.1. No App iOS:</h3>
                  <p className="mb-3">Napfy utiliza os seguintes serviços dentro do app iOS:</p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      <strong>Firebase Analytics</strong> – Análise de uso do app (eventos anônimos)
                      <br />
                      <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-napfy-teal hover:underline text-xs">
                        → Privacy Policy
                      </a>
                    </li>
                    <li>
                      <strong>Amplitude Analytics</strong> – Análise de produto e comportamento do usuário
                      <br />
                      <a href="https://amplitude.com/privacy" target="_blank" rel="noopener noreferrer" className="text-napfy-teal hover:underline text-xs">
                        → Privacy Policy
                      </a>
                    </li>
                    <li>
                      <strong>Amplitude Session Replay</strong> – Gravação de 1% das sessões para análise de UX
                      <br />
                      <a href="https://amplitude.com/privacy" target="_blank" rel="noopener noreferrer" className="text-napfy-teal hover:underline text-xs">
                        → Privacy Policy
                      </a>
                    </li>
                    <li>
                      <strong>AppsFlyer</strong> – Atribuição de marketing (rastreamento de instalações)
                      <br />
                      <span className="text-xs">Domínios: appsflyer.com, onelink.me, api2.appsflyer.com</span>
                      <br />
                      <a href="https://www.appsflyer.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-napfy-teal hover:underline text-xs">
                        → Privacy Policy
                      </a>
                    </li>
                    <li>
                      <strong>RevenueCat</strong> – Gerenciamento de assinaturas e compras no app
                      <br />
                      <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-napfy-teal hover:underline text-xs">
                        → Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">4.2. No Site (napfy.co):</h3>
                  <p className="mb-3">Apenas no site napfy.co (NÃO no app iOS):</p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      <strong>Meta Pixel</strong> – Rastreamento de conversões no site
                      <br />
                      <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-napfy-teal hover:underline text-xs">
                        → Privacy Policy
                      </a>
                    </li>
                    <li>
                      <strong>TikTok Pixel</strong> – Rastreamento de conversões no site
                      <br />
                      <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-napfy-teal hover:underline text-xs">
                        → Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>

                <p className="mt-4 text-napfy-teal font-medium">
                  ⚠️ Importante: Dados de sono do bebê (nome, data de nascimento, registros de sono) permanecem 100% locais no seu dispositivo e NUNCA são enviados a nenhum desses serviços.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">5. TRACKING PIXELS NO SITE (Meta e TikTok)</h2>
              <p className="bg-yellow-900/30 border-l-4 border-yellow-500 p-4 mb-4">
                <strong>⚠️ Atenção:</strong> Estes pixels funcionam <strong>APENAS no site napfy.co</strong>, <strong>NÃO dentro do app iOS</strong>.
              </p>

              <p className="mb-4">
                Utilizamos pixels de rastreamento em nosso site (napfy.co) para medir a eficácia de campanhas publicitárias.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Plataformas Utilizadas:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Meta Pixel (Facebook/Instagram):</strong> Rastreamento de conversões em anúncios do Meta</li>
                    <li><strong>TikTok Pixel:</strong> Rastreamento de conversões em anúncios do TikTok</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">O Que Eles Coletam (apenas no SITE):</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Visitas ao site napfy.co</li>
                    <li>Cliques em anúncios</li>
                    <li>Conversões (downloads do app vindos de anúncios)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Proteções de Privacidade:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li className="text-napfy-teal font-medium">Pixels funcionam APENAS no site (napfy.co), NÃO dentro do app iOS</li>
                    <li>No app iOS, usamos AppsFlyer (veja seção acima) para atribuição de marketing</li>
                    <li>Você pode desativar cookies no seu navegador</li>
                    <li>Dados de sono NUNCA são acessados por esses pixels (ficam no app, local)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">6. COMPARTILHAMENTO DE DADOS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>NÃO compartilhamos dados pessoais</li>
                <li>NÃO vendemos informações</li>
                <li>NÃO temos acesso aos dados do seu bebê</li>
                <li>Analytics são anonimizados e agregados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">7. SEGURANÇA</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Dados pessoais ficam apenas em seu dispositivo</li>
                <li>Você controla totalmente suas informações</li>
                <li>Recomendamos manter seu dispositivo protegido</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">8. SEUS DIREITOS</h2>
              <p className="mb-2">Você pode:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Deletar todos os dados do App a qualquer momento</li>
                <li>Desinstalar o App, removendo todos os dados</li>
                <li>Desativar notificações nas configurações</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">9. DADOS DE MENORES</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Não coletamos dados diretamente de menores</li>
                <li>O App deve ser usado por adultos responsáveis</li>
                <li>Dados de bebês são inseridos pelos pais/cuidadores</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">10. NOTIFICAÇÕES</h2>
              <p>Usamos notificações locais para lembretes de sono. Você pode desativá-las nas configurações do dispositivo.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">11. BACKUP</h2>
              <p>O App NÃO faz backup em nuvem. Dados são perdidos se o App for desinstalado.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">12. CONFORMIDADE LGPD</h2>
              <p className="mb-2">Embora os dados fiquem localmente, seguimos princípios da LGPD:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Transparência</li>
                <li>Minimização de dados</li>
                <li>Segurança</li>
                <li>Controle do usuário</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">13. ALTERAÇÕES</h2>
              <p>Avisaremos sobre mudanças nesta política através do App.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">14. CONTATO</h2>
              <p>Dúvidas sobre privacidade: <a href="mailto:hello@napfy.co" className="text-white hover:text-napfy-teal underline">hello@napfy.co</a></p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}