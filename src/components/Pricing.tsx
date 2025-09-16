'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const plans = [
  {
    name: 'Mensal',
    featured: false,
    price: 'R$ 19,90',
    priceMonthly: 'por mês',
    description: 'Experimente sem compromisso',
    button: {
      label: 'Começar agora',
      href: 'https://apps.apple.com/app/napfy',
    },
    features: [
      'Janelas de sono inteligentes',
      'Lembretes personalizados',
      'Acompanhamento completo',
      'Suporte em português',
      'Cancele quando quiser',
    ],
  },
  {
    name: 'Anual',
    featured: true,
    price: 'R$ 49,90',
    priceMonthly: 'por ano',
    originalPrice: 'R$ 238,80',
    description: 'Melhor custo-benefício',
    button: {
      label: 'Escolher plano anual',
      href: 'https://apps.apple.com/app/napfy',
    },
    features: [
      'Tudo do plano mensal',
      'Economia de 79%',
      'Suporte prioritário',
      'Novas funcionalidades primeiro',
      'Relatórios detalhados',
    ],
    badge: 'Mais Popular',
  },
  {
    name: 'Vitalício',
    featured: false,
    price: 'R$ 149,90',
    priceMonthly: 'pagamento único',
    description: 'Pague uma vez, use sempre',
    button: {
      label: 'Comprar vitalício',
      href: 'https://apps.apple.com/app/napfy',
    },
    features: [
      'Acesso vitalício completo',
      'Todas as funcionalidades',
      'Atualizações futuras incluídas',
      'Suporte VIP',
      'Para todos os seus filhos',
    ],
  },
]

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  priceMonthly,
  originalPrice,
  description,
  button,
  features,
  featured = false,
  badge,
}: {
  name: string
  price: string
  priceMonthly: string
  originalPrice?: string
  description: string
  button: {
    label: string
    href: string
  }
  features: string[]
  featured?: boolean
  badge?: string
}) {
  return (
    <div
      className={clsx(
        'relative rounded-3xl p-8',
        featured
          ? 'bg-gray-900 shadow-2xl'
          : 'bg-white ring-1 ring-gray-200'
      )}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-[#13B8A6] px-4 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        </div>
      )}
      <h3
        className={clsx(
          'text-lg font-semibold',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {name}
      </h3>
      <p
        className={clsx(
          'mt-2 text-sm',
          featured ? 'text-gray-400' : 'text-gray-600'
        )}
      >
        {description}
      </p>
      <div className="mt-6">
        <div className="flex items-baseline">
          <span
            className={clsx(
              'text-4xl font-bold tracking-tight',
              featured ? 'text-white' : 'text-gray-900'
            )}
          >
            {price}
          </span>
          {originalPrice && (
            <span className="ml-3 text-sm text-gray-400 line-through">
              {originalPrice}
            </span>
          )}
        </div>
        <p
          className={clsx(
            'mt-1 text-sm',
            featured ? 'text-gray-400' : 'text-gray-600'
          )}
        >
          {priceMonthly}
        </p>
      </div>
      <Button
        href={button.href}
        variant={featured ? 'solid' : 'outline'}
        color="orange"
        className="mt-8 w-full"
        aria-label={`${button.label} ${name}`}
      >
        {button.label}
      </Button>
      <ul
        className={clsx(
          'mt-8 space-y-3 text-sm',
          featured ? 'text-gray-300' : 'text-gray-600'
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon
              className={clsx(
                'h-6 w-6 flex-none',
                featured ? 'text-[#13B8A6]' : 'text-[#13B8A6]'
              )}
            />
            <span className="ml-3">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="border-t border-white/20 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Planos simples e transparentes
          </h2>
          <p className="mt-2 text-lg text-gray-200">
            Escolha o plano ideal para sua família
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}