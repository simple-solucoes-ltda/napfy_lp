/**
 * Amplitude Analytics Integration
 *
 * Initializes Amplitude for cross-device tracking.
 * Connects Landing Page sessions with App sessions using anonymous_id.
 */

import * as amplitude from '@amplitude/analytics-browser'
import { getAnonymousId } from './anonymous-id'
import type { UtmParams } from './utm'

let isInitialized = false

/**
 * Initializes Amplitude Analytics with user identification and UTM parameters.
 *
 * @param {UtmParams} utmParams - UTM campaign parameters to set as user properties
 */
export const initializeAmplitude = (utmParams?: UtmParams): void => {
  // Prevent multiple initializations
  if (isInitialized) return

  // Only run in browser
  if (typeof window === 'undefined') return

  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY
  if (!apiKey) {
    console.warn('[Amplitude] API key not found in environment variables')
    return
  }

  try {
    // Initialize Amplitude
    amplitude.init(apiKey, undefined, {
      defaultTracking: {
        pageViews: true,
        sessions: true,
        formInteractions: false,
        fileDownloads: false,
      },
    })

    // Set userId to anonymous_id for cross-device tracking
    const anonymousId = getAnonymousId()
    if (anonymousId) {
      amplitude.setUserId(anonymousId)
    }

    // Set platform identifier
    const identifyEvent = new amplitude.Identify()
    identifyEvent.set('platform', 'web')

    // Add UTM parameters as user properties if provided
    if (utmParams) {
      if (utmParams.utm_source) {
        identifyEvent.set('utm_source', utmParams.utm_source)
      }
      if (utmParams.utm_medium) {
        identifyEvent.set('utm_medium', utmParams.utm_medium)
      }
      if (utmParams.utm_campaign) {
        identifyEvent.set('utm_campaign', utmParams.utm_campaign)
      }
      if (utmParams.utm_content) {
        identifyEvent.set('utm_content', utmParams.utm_content)
      }
      if (utmParams.utm_term) {
        identifyEvent.set('utm_term', utmParams.utm_term)
      }
    }

    amplitude.identify(identifyEvent)

    isInitialized = true
  } catch (error) {
    console.error('[Amplitude] Initialization error:', error)
  }
}

/**
 * Tracks a custom event in Amplitude.
 *
 * @param {string} eventName - Name of the event
 * @param {Record<string, any>} eventProperties - Event properties
 */
export const trackAmplitudeEvent = (
  eventName: string,
  eventProperties?: Record<string, any>
): void => {
  if (!isInitialized) {
    console.warn('[Amplitude] Cannot track event - SDK not initialized')
    return
  }

  amplitude.track(eventName, eventProperties)
}

/**
 * Gets the current Amplitude instance (for advanced usage).
 */
export const getAmplitudeInstance = () => {
  return amplitude
}
