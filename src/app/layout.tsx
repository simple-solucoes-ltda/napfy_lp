import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { FirebaseAnalytics } from '@/components/FirebaseAnalytics'

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
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  return (
    <html lang="pt-BR" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <head>
        {pixelId && (
          <>
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${pixelId}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}
      </head>
      <body>
        {children}
        <Analytics />
        <FirebaseAnalytics />
      </body>
    </html>
  )
}