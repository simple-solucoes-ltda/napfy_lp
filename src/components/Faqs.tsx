import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Como o Napfy calcula as janelas de sono?',
      answer:
        'O Napfy utiliza algoritmos baseados nas diretrizes da Sociedade Brasileira de Pediatria e aprende com os padrões do seu bebê. O app ajusta automaticamente as janelas conforme a idade e comportamento individual.',
    },
    {
      question: 'O Napfy funciona para recém-nascidos?',
      answer:
        'Sim! O Napfy funciona desde o nascimento até os 3 anos. Para recém-nascidos, o app considera as necessidades especiais dessa fase e ajuda a estabelecer gradualmente uma rotina saudável.',
    },
  ],
  [
    {
      question: 'O app funciona offline?',
      answer:
        'Sim, as principais funcionalidades do Napfy funcionam offline. Você pode registrar sonos e receber lembretes sem internet. Os dados são sincronizados quando você se conectar.',
    },
    {
      question: 'O app está disponível para Android?',
      answer:
        'No momento o Napfy está disponível apenas para iPhone na App Store. Estamos trabalhando na versão Android que será lançada em breve.',
    },
  ],
  [
    {
      question: 'Como cancelo minha assinatura?',
      answer:
        'Você pode cancelar sua assinatura a qualquer momento diretamente nas configurações da App Store. Não há multas ou taxas de cancelamento.',
    },
    {
      question: 'Os dados do meu bebê são seguros?',
      answer:
        'Absolutamente! Utilizamos criptografia de ponta e todos os dados são armazenados de forma segura. Nunca compartilhamos informações pessoais com terceiros.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-white/20 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-white"
          >
            Perguntas frequentes
          </h2>
          <p className="mt-2 text-lg text-gray-200">
            Se você tiver outras dúvidas,{' '}
            <a
              href="mailto:hello@napfy.co"
              className="text-white underline"
            >
              entre em contato
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-200">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}