import { Container } from '@/components/Container'

export default function Terms() {
  return (
    <div className="py-20 sm:py-32 text-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-medium tracking-tight text-white mb-8">
            TERMOS DE USO DO APLICATIVO NAPFY
          </h1>

          <p className="text-gray-300 mb-8">Data de vigência: 16/09/2025</p>

          <div className="space-y-8 text-gray-200">
            <section>
              <h2 className="text-2xl font-medium text-white mb-3">1. ACEITAÇÃO DOS TERMOS</h2>
              <p>Ao baixar, instalar ou usar o aplicativo Napfy ("App"), você concorda com estes Termos de Uso. Se não concordar, não use o App.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">2. SOBRE O NAPFY</h2>
              <p>O Napfy é um aplicativo de acompanhamento de sono infantil desenvolvido pela Simple Soluções LTDA, CNPJ 19.862.454/0001-01 ("nós", "nosso").</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">3. ELEGIBILIDADE</h2>
              <p>O App destina-se exclusivamente a pais, mães e cuidadores maiores de 18 anos. Ao usar o App, você declara ter capacidade legal para aceitar estes termos.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">4. USO DO APLICATIVO</h2>
              <div className="space-y-2">
                <p>4.1. O App oferece ferramentas para registro e acompanhamento do sono infantil</p>
                <p>4.2. As informações fornecidas são orientativas, não substituindo acompanhamento pediátrico</p>
                <p>4.3. Você é responsável pela precisão dos dados inseridos</p>
                <p>4.4. O App funciona localmente em seu dispositivo, sem necessidade de internet</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">5. ASSINATURA E PAGAMENTO</h2>
              <div className="space-y-2">
                <p>5.1. O App oferece planos de assinatura e compra vitalícia</p>
                <p>5.2. Pagamentos são processados pela Apple App Store ou Google Play Store</p>
                <p>5.3. Renovações automáticas podem ser canceladas conforme regras das lojas</p>
                <p>5.4. Reembolsos seguem as políticas das respectivas lojas</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">6. PROPRIEDADE INTELECTUAL</h2>
              <p>Todos os direitos sobre o App, incluindo design, funcionalidades e conteúdo, pertencem à Simple Soluções LTDA.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">7. LIMITAÇÃO DE RESPONSABILIDADE</h2>
              <div className="space-y-2">
                <p>7.1. O App é fornecido "como está"</p>
                <p>7.2. Não garantimos resultados específicos de sono</p>
                <p>7.3. Não nos responsabilizamos por decisões tomadas com base no App</p>
                <p>7.4. Recomendamos sempre consultar um pediatra</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">8. PRIVACIDADE</h2>
              <p>Seus dados são armazenados localmente em seu dispositivo. Consulte nossa Política de Privacidade para mais detalhes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">9. RESCISÃO</h2>
              <p>Podemos suspender ou encerrar seu acesso ao App em caso de violação destes termos.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">10. ALTERAÇÕES</h2>
              <p>Reservamos o direito de modificar estes termos. Alterações serão comunicadas pelo App.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">11. LEGISLAÇÃO</h2>
              <p>Estes termos são regidos pelas leis brasileiras.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">12. CONTATO</h2>
              <p>Dúvidas: <a href="mailto:hello@napfy.co" className="text-napfy-teal hover:underline">hello@napfy.co</a></p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}