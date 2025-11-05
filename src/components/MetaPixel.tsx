'use client'

import { useEffect } from 'react'
import ReactPixel from 'react-facebook-pixel'

export function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  useEffect(() => {
    if (!pixelId) return

    ReactPixel.init(pixelId, undefined, {
      autoConfig: true,
      debug: false,
    })
    ReactPixel.pageView()
  }, [pixelId])

  return null
}
