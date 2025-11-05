'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

export function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
  const initAttempted = useRef(false)

  useEffect(() => {
    // Only run once per component mount
    if (initAttempted.current) return
    initAttempted.current = true

    // Check if fbq is available and not already initialized
    const checkAndInit = () => {
      if (typeof window !== 'undefined' && window.fbq) {
        if (!window._fbq_initialized) {
          window.fbq('init', pixelId!)
          window.fbq('track', 'PageView')
          window._fbq_initialized = true
        }
      } else {
        // If fbq not ready yet, try again in 100ms
        setTimeout(checkAndInit, 100)
      }
    }

    checkAndInit()
  }, [pixelId])

  if (!pixelId) return null

  return (
    <>
      <Script
        id="meta-pixel-base"
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
  )
}
