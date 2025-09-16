import { Container } from '@/components/Container'

const problems = [
  {
    emoji: '😴',
    title: '3h da manhã e o bebê não dorme',
    description: 'Você já tentou de tudo mas nada funciona'
  },
  {
    emoji: '😰',
    title: 'Exausta mas com medo de fazer errado',
    description: 'A pressão de ser uma boa mãe é esmagadora'
  },
  {
    emoji: '📱',
    title: 'Google às 2h: "bebê não dorme o que fazer"',
    description: 'Mil informações conflitantes e nenhuma solução'
  },
  {
    emoji: '☕',
    title: 'Café virou seu melhor amigo',
    description: 'Sobrevivendo com 3 horas de sono por noite'
  }
]

const steps = [
  {
    number: '1',
    title: 'Configure',
    description: 'Idade e rotina do seu bebê em 5 segundos',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    number: '2',
    title: 'Relaxe',
    description: 'Napfy calcula as janelas ideais automaticamente',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    number: '3',
    title: 'Durma',
    description: 'Receba lembretes no momento perfeito',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    )
  }
]

export function ProblemSolution() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Reconhece isso? 😴
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            73% das mães brasileiras dormem menos de 4h por noite nos primeiros 6 meses
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Fonte: Sociedade Brasileira de Pediatria
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-gray-200 p-6 hover:border-[var(--color-napfy-teal)] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{problem.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{problem.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{problem.description}</p>
                  </div>
                </div>
                <div className="absolute -right-1 -top-1">
                  <svg className="h-6 w-6 text-[var(--color-napfy-teal)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            3 passos para noites tranquilas
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Simples assim. Sem complicação, sem culpa.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="absolute top-12 left-1/2 hidden sm:block w-full">
                    <svg className="h-0.5 w-full text-gray-300" fill="currentColor">
                      <rect width="100%" height="100%" />
                    </svg>
                  </div>
                )}
                <div className="relative">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-napfy-teal)] text-white">
                    <span className="text-3xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-2xl bg-gradient-to-r from-[var(--color-napfy-teal)] to-[var(--color-napfy-teal)]/80 p-8 text-center text-white">
            <h3 className="text-2xl font-semibold">
              Teste agora mesmo!
            </h3>
            <p className="mt-2 text-white/90">
              Digite a hora que seu bebê acordou e veja a mágica acontecer
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="time"
                defaultValue="07:00"
                className="rounded-lg px-4 py-2 text-gray-900 text-center font-medium"
              />
              <button className="rounded-lg bg-[var(--color-napfy-orange)] px-6 py-2 font-semibold text-white hover:bg-[var(--color-napfy-orange)]/90">
                Calcular próxima soneca
              </button>
            </div>
            <div className="mt-4 text-sm text-white/80">
              Próxima soneca: <span className="font-bold text-[var(--color-napfy-gold)]">09:30</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}