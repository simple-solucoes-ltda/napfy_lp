import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

function CheckIcon() {
  return (
    <svg
      className="h-6 w-6 flex-shrink-0 text-white"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden border-t border-white/20 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#13B8A6" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Pronta para ter noites mais tranquilas?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Imagine saber exatamente quando colocar seu bebê para dormir.
          </p>
          <p className="mt-2 text-lg text-gray-300">
            Sem adivinhar. Sem ansiedade. Sem ficar testando às cegas.
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreLink color="white" location="cta_final" />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-base text-white sm:text-lg">
                Bebê dormindo no horário certo
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-base text-white sm:text-lg">
                Menos resistência
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-base text-white sm:text-lg">
                Noites tranquilas
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-base text-white sm:text-lg">
                Fim da angústia
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
