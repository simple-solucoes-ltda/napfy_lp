import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { Analytics } from '@vercel/analytics/react'
import { FirebaseAnalytics } from '@/components/FirebaseAnalytics'
import { MetaPixel } from '@/components/MetaPixel'
import { TikTokPixel } from '@/components/TikTokPixel'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Napfy',
    default: 'Napfy - O sono do seu bebê sob controle',
  },
  description:
    'Napfy calcula as janelas de sono ideais e envia lembretes no momento perfeito. Baseado nas diretrizes da Sociedade Brasileira de Pediatria.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>
        {children}
        <Analytics />
        <FirebaseAnalytics />
        <MetaPixel />
        <TikTokPixel />
      </body>
    </html>
  )
}