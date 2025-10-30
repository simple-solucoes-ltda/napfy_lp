import { Container } from '@/components/Container'
import Image from 'next/image'

export function OurStory() {
  return (
    <section
      id="our-story"
      aria-label="Nossa história"
      className="border-t border-white/20 py-20 sm:py-32"
    >
      <Container>
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-sm font-medium text-white">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            De pais para pais
          </div>
        </div>

        <h2 className="mt-8 text-center text-3xl font-medium tracking-tight text-white sm:text-4xl">
          Por que criamos o Napfy
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Image card */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg -rotate-2 transition-transform hover:rotate-0">
              <div className="bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://i.imgur.com/6K29Mbr.jpeg"
                    alt="Marla, Fábio, Fabinho e Duda"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="mt-4 pb-2 text-center">
                  <p className="text-lg text-gray-700">
                    Marla, Fábio, Fabinho e Duda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-300">
              Somos <span className="font-semibold text-white">Marla e Fábio</span>, e este é o Fabinho, nosso filho.
            </p>

            <p className="mt-6 text-lg text-gray-300">
              Quando ele nasceu, passamos meses exaustos tentando entender o sono dele. Testamos TUDO: aplicativos genéricos, planilhas, métodos da internet...
            </p>

            <p className="mt-6 text-xl font-semibold text-white">
              Nada funcionava de verdade.
            </p>

            <p className="mt-6 text-lg text-gray-300">
              Foi aí que decidimos criar a ferramenta que a gente precisava: um app que SE ADAPTA ao bebê, não o contrário.
            </p>

            <div className="mt-8 rounded-2xl border-l-4 border-teal-500 bg-teal-500/10 p-6">
              <p className="text-lg leading-relaxed text-teal-300">
                O Napfy nasceu da nossa necessidade real de pais desesperados por uma noite de sono. Agora, queremos que outras famílias tenham essa mesma tranquilidade.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
