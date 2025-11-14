'use client'

import { useEffect } from 'react'
import { initializeAmplitude } from '@/lib/amplitude'
import { captureUtmParams } from '@/lib/utm'

/**
 * Amplitude Analytics Component
 *
 * Initializes Amplitude on page load with:
 * - Anonymous ID for cross-device tracking
 * - UTM parameters from URL
 * - Platform identifier (web)
 */
export function AmplitudeAnalytics() {
  useEffect(() => {
    // Capture UTM parameters from URL on mount
    const utmParams = captureUtmParams()

    // Initialize Amplitude with captured UTMs
    initializeAmplitude(utmParams)
  }, [])

  return null
}
