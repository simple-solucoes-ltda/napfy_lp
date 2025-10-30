import { Container } from '@/components/Container'
import Image from 'next/image'

function CheckIcon() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500">
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="Como usar o Napfy"
      className="border-t border-white/20 py-20 sm:py-32"
    >
      <Container>
        <h2 className="text-center text-3xl font-medium tracking-tight text-white sm:text-4xl">
          Você só precisa fazer isso:
        </h2>

        {/* Workflow Cards */}
        <div className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:items-stretch sm:justify-center">
          {/* Card 1 */}
          <div className="w-full max-w-sm rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/wakeup.png"
                  alt="Botão Acordar"
                  width={150}
                  height={150}
                  className="h-auto w-[150px]"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                1. Bebê acordou?
              </h3>
              <p className="mt-4 text-lg text-gray-300">
                Aperta &quot;Acordar&quot;
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <svg
              className="h-8 w-8 rotate-90 text-teal-500 sm:rotate-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-sm rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/sleep.png"
                  alt="Botão Dormir"
                  width={150}
                  height={150}
                  className="h-auto w-[150px]"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                2. Bebê dormiu?
              </h3>
              <p className="mt-4 text-lg text-gray-300">
                Aperta &quot;Dormir&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 rounded-2xl border-2 border-teal-500/30 bg-teal-500/5 p-8 sm:p-12">
          <h3 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            O Napfy faz todo o resto:
          </h3>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <CheckIcon />
              <p className="text-lg text-gray-300">
                Calcula a janela ideal
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <CheckIcon />
              <p className="text-lg text-gray-300">
                Te avisa no momento certo
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <CheckIcon />
              <p className="text-lg text-gray-300">
                Recalcula a cada soneca
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <CheckIcon />
              <p className="text-lg text-gray-300">
                Mostra padrões do seu bebê
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
