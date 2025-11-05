'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, any>) => void
  }
}

// Global flag to prevent multiple initializations across all component instances
let isPixelInitialized = false

export function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
  const hasInitialized = useRef(false)

  useEffect(() => {
    // Skip if already initialized globally or locally
    if (!pixelId || isPixelInitialized || hasInitialized.current) {
      console.log('[MetaPixel] Skipping init - already initialized', {
        isPixelInitialized,
        hasInitializedCurrent: hasInitialized.current
      })
      return
    }

    console.log('[MetaPixel] Attempting to initialize...')

    // Wait for fbq to be available
    const initPixel = () => {
      if (typeof window !== 'undefined' && window.fbq) {
        console.log('[MetaPixel] fbq available, calling init with pixelId:', pixelId)
        hasInitialized.current = true
        isPixelInitialized = true
        window.fbq('init', pixelId)
        console.log('[MetaPixel] init complete, calling PageView')
        window.fbq('track', 'PageView')
        console.log('[MetaPixel] PageView tracked')
      } else {
        // Retry after 50ms if fbq not ready
        setTimeout(initPixel, 50)
      }
    }

    initPixel()
  }, [pixelId])

  if (!pixelId) return null

  return (
    <Script
      id="fb-pixel"
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
  )
}
