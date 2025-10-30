import { Container } from '@/components/Container'

const features = [
  {
    title: 'O segredo: janelas de sono',
    description:
      'Existe um tempo ideal que o bebê consegue ficar acordado antes de entrar em cansaço extremo.',
    problem: 'O problema?',
    problemText:
      'Essa janela muda conforme a idade do bebê e quanto ele dormiu na soneca anterior.',
    solution: 'A solução?',
    solutionText: 'O Napfy calcula isso automaticamente pra você.',
    highlight: true,
  },
  {
    title: 'Dentro da janela',
    subtitle: 'Bebê dorme tranquilo em minutos',
    icon: 'check',
  },
  {
    title: 'Passou da janela',
    subtitle: 'Bebê fica agitado e resiste ao sono',
    icon: 'x',
  },
]

const differentials = [
  {
    title: 'O diferencial: se adapta ao seu bebê',
    description:
      'Apps tradicionais usam horários fixos que não se ajustam ao ritmo real do seu bebê.',
    highlight: 'O Napfy recalcula a cada soneca',
    highlightText:
      'baseado no padrão único dele. Bebês não são robôs. Por isso o Napfy se adapta.',
  },
  {
    title: 'Apps tradicionais',
    subtitle: 'Horários fixos que não se ajustam',
    icon: 'x',
  },
  {
    title: 'Napfy',
    subtitle: 'Recalcula baseado no SEU bebê',
    icon: 'check',
  },
]

function CheckIcon() {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-500">
      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  )
}

function XIcon() {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500">
      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  )
}

export function WhyItWorks() {
  return (
    <section
      id="why-it-works"
      aria-label="Why Napfy works"
      className="border-t border-white/20 py-20 sm:py-32"
    >
      <Container>
        <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
          Por que o Napfy funciona
        </h2>

        {/* First Feature: Janelas de Sono */}
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-semibold text-white">
            {features[0].title}
          </h3>
          <p className="text-lg text-gray-300">
            {features[0].description}
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <CheckIcon />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {features[1].title}
                </h4>
                <p className="mt-1 text-base text-gray-300">
                  {features[1].subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <XIcon />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {features[2].title}
                </h4>
                <p className="mt-1 text-base text-gray-300">
                  {features[2].subtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-teal-500/30 bg-teal-500/5 p-6">
            <p className="text-base text-gray-300">
              <span className="font-semibold text-white">
                {features[0].problem}
              </span>{' '}
              {features[0].problemText}
            </p>
            <p className="mt-4 text-base text-gray-300">
              <span className="font-semibold text-white">
                {features[0].solution}
              </span>{' '}
              {features[0].solutionText}
            </p>
          </div>
        </div>

        {/* Second Feature: Diferencial */}
        <div className="mt-20 space-y-8">
          <h3 className="text-2xl font-semibold text-white">
            {differentials[0].title}
          </h3>
          <p className="text-lg text-gray-300">
            {differentials[0].description}
          </p>
          <p className="text-base text-gray-300">
            <span className="font-semibold text-white">
              {differentials[0].highlight}
            </span>{' '}
            {differentials[0].highlightText}
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <CheckIcon />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {differentials[2].title}
                </h4>
                <p className="mt-1 text-base text-gray-300">
                  {differentials[2].subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <XIcon />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {differentials[1].title}
                </h4>
                <p className="mt-1 text-base text-gray-300">
                  {differentials[1].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
