import { Container } from '@/components/Container'

export default function Privacy() {
  return (
    <div className="py-20 sm:py-32 text-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-medium tracking-tight text-white mb-8">
            POLÍTICA DE PRIVACIDADE DO NAPFY
          </h1>

          <p className="text-gray-300 mb-8">Data de vigência: 16/09/2025</p>

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
                  <ul className="list-disc list-inside space-y-1">
                    <li>Modelo do dispositivo</li>
                    <li>Versão do sistema operacional</li>
                    <li>Estatísticas de uso do app</li>
                    <li>Eventos de interação (sem dados pessoais)</li>
                  </ul>
                  <p className="mt-2">Coletados via Firebase Analytics para melhorar o App</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">2. COMO USAMOS AS INFORMAÇÕES</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">2.1. DADOS LOCAIS:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Calcular janelas de sono</li>
                    <li>Enviar notificações locais</li>
                    <li>Gerar relatórios de sono</li>
                  </ul>
                  <p className="mt-2">Estes dados permanecem em seu dispositivo</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">2.2. DADOS ANALÍTICOS:</h3>
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
              <h2 className="text-2xl font-medium text-white mb-3">3. COMPARTILHAMENTO DE DADOS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>NÃO compartilhamos dados pessoais</li>
                <li>NÃO vendemos informações</li>
                <li>NÃO temos acesso aos dados do seu bebê</li>
                <li>Analytics são anonimizados e agregados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">4. SEGURANÇA</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Dados pessoais ficam apenas em seu dispositivo</li>
                <li>Você controla totalmente suas informações</li>
                <li>Recomendamos manter seu dispositivo protegido</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">5. SEUS DIREITOS</h2>
              <p className="mb-2">Você pode:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Deletar todos os dados do App a qualquer momento</li>
                <li>Desinstalar o App, removendo todos os dados</li>
                <li>Desativar notificações nas configurações</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">6. DADOS DE MENORES</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Não coletamos dados diretamente de menores</li>
                <li>O App deve ser usado por adultos responsáveis</li>
                <li>Dados de bebês são inseridos pelos pais/cuidadores</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">7. NOTIFICAÇÕES</h2>
              <p>Usamos notificações locais para lembretes de sono. Você pode desativá-las nas configurações do dispositivo.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">8. BACKUP</h2>
              <p>O App NÃO faz backup em nuvem. Dados são perdidos se o App for desinstalado.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">9. CONFORMIDADE LGPD</h2>
              <p className="mb-2">Embora os dados fiquem localmente, seguimos princípios da LGPD:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Transparência</li>
                <li>Minimização de dados</li>
                <li>Segurança</li>
                <li>Controle do usuário</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">10. ALTERAÇÕES</h2>
              <p>Avisaremos sobre mudanças nesta política através do App.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-3">11. CONTATO</h2>
              <p>Dúvidas sobre privacidade: <a href="mailto:hello@napfy.co" className="text-napfy-teal hover:underline">hello@napfy.co</a></p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}