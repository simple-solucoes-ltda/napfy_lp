'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

interface Review {
  title: string
  body: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
}

const reviews: Array<Review> = [
  {
    title: 'Mudou nossa vida',
    body: 'Meu bebê dormia apenas 30 minutos por vez. Com o Napfy, conseguimos estabelecer uma rotina e agora ele dorme 2 horas seguidas.',
    author: 'Juliana M.',
    rating: 5,
  },
  {
    title: 'Essencial para mães',
    body: 'As janelas de sono personalizadas foram um divisor de águas. Minha filha está mais tranquila e eu finalmente descanso.',
    author: 'Carolina S.',
    rating: 5,
  },
  {
    title: 'Funciona mesmo',
    body: 'Estava cética, mas em 3 dias já vi diferença. O app aprende os padrões do bebê e ajusta automaticamente.',
    author: 'Patricia L.',
    rating: 5,
  },
  {
    title: 'Vale cada centavo',
    body: 'Tentei várias técnicas antes. O Napfy foi o único que realmente funcionou para estabelecer uma rotina de sono.',
    author: 'Amanda R.',
    rating: 5,
  },
  {
    title: 'Recomendo muito',
    body: 'Meu pediatra ficou impressionado com a melhora no sono do bebê. O app segue as diretrizes da SBP perfeitamente.',
    author: 'Fernanda K.',
    rating: 5,
  },
  {
    title: 'Salvou minhas noites',
    body: 'Depois de meses sem dormir direito, finalmente temos uma rotina. Os lembretes são no momento perfeito.',
    author: 'Mariana B.',
    rating: 5,
  },
  {
    title: 'Indispensável',
    body: 'Uso desde que meu filho nasceu. Agora com 8 meses, ele dorme a noite toda. O histórico de sono ajuda muito nas consultas.',
    author: 'Beatriz T.',
    rating: 5,
  },
  {
    title: 'Melhor investimento',
    body: 'Gastei muito com consultoria de sono antes. O Napfy é mais barato e mais efetivo. Super recomendo!',
    author: 'Renata G.',
    rating: 5,
  },
  {
    title: 'Bebê mais feliz',
    body: 'Não é só sobre dormir mais. Meu bebê está mais alegre e disposto durante o dia. A diferença é incrível.',
    author: 'Luciana P.',
    rating: 5,
  },
  {
    title: 'App intuitivo',
    body: 'Fácil de usar mesmo privada de sono. As análises mostram exatamente onde melhorar a rotina.',
    author: 'Daniela F.',
    rating: 5,
  },
  {
    title: 'Funciona para gêmeos',
    body: 'Tenho gêmeos e consigo gerenciar o sono dos dois no app. Cada um tem seu perfil e janelas personalizadas.',
    author: 'Claudia N.',
    rating: 5,
  },
  {
    title: 'Ciência que funciona',
    body: 'Adoro que é baseado em evidências científicas. Não é achismo, são dados reais da pediatria.',
    author: 'Gabriela H.',
    rating: 5,
  },
  {
    title: 'Suporte excelente',
    body: 'Tive dúvidas no início e o suporte me ajudou super rápido. O app é brasileiro e isso faz diferença!',
    author: 'Tatiana C.',
    rating: 5,
  },
  {
    title: 'Resultados rápidos',
    body: 'Em uma semana já notei melhora significativa. Minha bebê parou de lutar contra o sono.',
    author: 'Vanessa M.',
    rating: 5,
  },
]

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }: { rating: Review['rating'] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-[#13B8A6]' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({
  title,
  body,
  author,
  rating,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Review> & Review) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg/6 font-semibold before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base/7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>
  className?: string
  reviewClassName?: (reviewIndex: number) => string
  msPerPixel?: number
}) {
  let columnRef = useRef<React.ElementRef<'div'>>(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef<React.ElementRef<'div'>>(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-196 max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
      }}
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="border-t border-white/20 pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-white sm:text-center"
        >
          Famílias que recuperaram o sono com Napfy
        </h2>
        <p className="mt-2 text-lg text-gray-200 sm:text-center">
          Milhares de mães já transformaram as noites de suas famílias
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
