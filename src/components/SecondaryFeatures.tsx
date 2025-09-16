import { useId } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import historyScreen from '@/images/Screen - History.png'

const features = [
  {
    name: 'Histórico completo',
    description:
      'Acompanhe todos os padrões de sono ao longo do tempo com visualização detalhada.',
    icon: DeviceHistoryIcon,
  },
  {
    name: 'Notificações inteligentes',
    description:
      'Receba lembretes no momento perfeito, antes do bebê ficar irritado.',
    icon: DeviceNotificationIcon,
  },
]

function DeviceHistoryIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#13B8A6"
      />
      <path
        d="M16 10v6l4 2"
        stroke="#13B8A6"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={16} cy={16} r={16} fill="#13B8A6" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceNotificationIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#13B8A6"
      />
      <path
        d="M13 17.5V13a3 3 0 116 0v4.5l1.5 1.5v1H11v-1l1.5-1.5z"
        fill="#13B8A6"
      />
      <circle cx={16} cy={16} r={16} fill="#13B8A6" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceUsersIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#13B8A6"
      />
      <circle cx={13} cy={13} r={2} fill="#1CA4A1" />
      <circle cx={19} cy={13} r={2} fill="#1CA4A1" />
      <path
        d="M9 20c0-2 2-4 7-4s7 2 7 4v2H9v-2z"
        fill="#13B8A6"
      />
      <circle cx={16} cy={16} r={16} fill="#13B8A6" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceMoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#13B8A6"
      />
      <path
        d="M19 12.5A5.5 5.5 0 0113.5 18c.5.08 1 .12 1.5.12a6 6 0 004-10.38 5.46 5.46 0 010 4.76z"
        fill="#13B8A6"
      />
      <circle cx={16} cy={16} r={16} fill="#13B8A6" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceCloudIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#13B8A6"
      />
      <path
        d="M19.5 18h-7a3 3 0 110-6 3 3 0 013.5-3.5A4.5 4.5 0 0120.5 13a2.5 2.5 0 010 5z"
        fill="#13B8A6"
      />
      <circle cx={16} cy={16} r={16} fill="#13B8A6" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceShareIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#13B8A6"
      />
      <path
        d="M16 10v8m0-8l-3 3m3-3l3 3m-7 7h8"
        stroke="#13B8A6"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={16} cy={16} r={16} fill="#13B8A6" fillOpacity={0.2} />
    </svg>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="border-t border-white/20 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Recursos que fazem a diferença
          </h2>
          <p className="mt-2 text-lg text-gray-200">
            Tudo pensado para facilitar sua rotina e melhorar o sono do seu bebê
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 sm:gap-y-10 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li key={feature.name} className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-white">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-200">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}