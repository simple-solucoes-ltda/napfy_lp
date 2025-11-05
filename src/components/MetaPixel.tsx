'use client'

import { useEffect } from 'react'

export function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  useEffect(() => {
    if (!pixelId) return

    // Dynamic import to avoid SSR issues
    import('react-facebook-pixel')
      .then((module) => module.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelId, undefined, {
          autoConfig: true,
          debug: false,
        })
        ReactPixel.pageView()
      })
  }, [pixelId])

  return null
}
