import { Container } from '@/components/Container'

export function MarlaStory() {
  return (
    <section id="historia" className="py-20 sm:py-32 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              Uma história real de mãe para mãe
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--color-napfy-teal)] to-[var(--color-napfy-teal)]/80 p-8 text-white">
                <div className="flex h-full flex-col justify-center">
                  <svg className="h-12 w-12 text-[var(--color-napfy-gold)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <blockquote className="mt-6">
                    <p className="text-lg font-medium">
                      &ldquo;Depois de 4 anos sem dormir direito com meu primeiro filho,
                      eu sabia que tinha que existir uma forma melhor.
                      Foi quando decidi criar o Napfy.&rdquo;
                    </p>
                    <footer className="mt-6">
                      <p className="text-[var(--color-napfy-gold)] font-semibold">
                        Marla
                      </p>
                      <p className="text-white/80 text-sm">
                        Mãe e co-fundadora do Napfy
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-2xl">😴</span> O Problema
                </h3>
                <p className="mt-2 text-gray-600">
                  &ldquo;Eu tentei de tudo: livros, consultoras, apps estrangeiros.
                  Nada funcionava para a nossa realidade brasileira.
                  Gastei uma fortuna e continuava exausta.&rdquo;
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-2xl">💡</span> A Descoberta
                </h3>
                <p className="mt-2 text-gray-600">
                  &ldquo;Quando descobri sobre as janelas de sono e a ciência por trás delas,
                  tudo mudou. Mas calcular manualmente era impossível com um bebê no colo.&rdquo;
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-2xl">🚀</span> A Solução
                </h3>
                <p className="mt-2 text-gray-600">
                  &ldquo;Junto com meu marido Fábio, desenvolvedor, criamos o Napfy.
                  Um app simples, baseado na ciência da SBP, que faz o trabalho pesado por você.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-napfy-teal)]/10 px-4 py-2">
              <svg className="h-5 w-5 text-[var(--color-napfy-teal)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-[var(--color-napfy-teal)]">
                100% criado por pais brasileiros, para pais brasileiros
              </span>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-to-r from-[var(--color-napfy-gold)]/20 to-[var(--color-napfy-gold)]/10 p-8">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-900">
                &ldquo;Hoje, mais de 5.000 famílias brasileiras dormem melhor graças ao Napfy.
                E saber que cada família que dorme bem é uma mãe menos exausta...
                isso não tem preço.&rdquo;
              </p>
              <p className="mt-4 text-sm text-gray-600">
                — Marla, uma mãe que entende você
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}