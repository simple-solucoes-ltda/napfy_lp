import { Container } from '@/components/Container'

const painPoints = [
  {
    title: 'Não sei o que estou fazendo de errado',
    description:
      'Você tenta de tudo: colo, peito, música, passeio... Mas nada parece funcionar de verdade. E você fica exausta sem entender POR QUÊ.',
  },
  {
    title: 'Bebê fica impossível na hora de dormir',
    description:
      'Ele chora, resiste, luta contra o sono. Você leva 20 minutos, 30... 1 hora... E quando finalmente dorme, acorda logo.',
  },
  {
    title: 'Vivo adivinhando horários',
    description:
      'Será que já é hora da soneca? Será que espero mais um pouco? Será que errei de novo? Você não tem certeza de NADA.',
  },
]

export function PainPoints() {
  return (
    <section
      id="pain-points"
      aria-label="Pain points"
      className="border-t border-white/20 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Por que tantas mães não conseguem fazer o bebê dormir bem?
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Você não está sozinha. Pesquisa da Revista CRESCER mostrou que 42%
            das famílias apontam o SONO como a maior dificuldade da
            maternidade.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="flex flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10"
            >
              <h3 className="text-xl font-semibold italic text-white">
                &quot;{point.title}&quot;
              </h3>
              <p className="mt-4 flex-1 text-base leading-7 text-gray-300">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
