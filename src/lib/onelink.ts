/**
 * AppsFlyer OneLink Integration
 *
 * Builds dynamic OneLink URLs with attribution parameters.
 * Passes anonymous_id and UTMs from web to app for cross-device tracking.
 */

import { getAnonymousId } from './anonymous-id'
import { getUtmParams } from './utm'

const ONELINK_BASE_URL = 'https://napfy.onelink.me/RAwm/daa4bnyw'
const APP_STORE_URL = 'https://apps.apple.com/app/id6752109860'

/**
 * Builds a dynamic OneLink URL with tracking parameters.
 *
 * Includes:
 * - af_web_dp: Desktop redirect to App Store
 * - af_sub1: Anonymous ID for web→app connection
 * - utm_*: All captured UTM parameters (if present)
 *
 * @returns {string} Complete OneLink URL with all parameters
 */
export const buildOneLinkUrl = (): string => {
  const url = new URL(ONELINK_BASE_URL)

  // Add desktop redirect
  url.searchParams.set('af_web_dp', APP_STORE_URL)

  // Add anonymous_id for cross-device tracking
  const anonymousId = getAnonymousId()
  if (anonymousId) {
    url.searchParams.set('af_sub1', anonymousId)
  }

  // Add UTM parameters (only those that exist)
  const utmParams = getUtmParams()

  if (utmParams.utm_source) {
    url.searchParams.set('utm_source', utmParams.utm_source)
  }

  if (utmParams.utm_medium) {
    url.searchParams.set('utm_medium', utmParams.utm_medium)
  }

  if (utmParams.utm_campaign) {
    url.searchParams.set('utm_campaign', utmParams.utm_campaign)
  }

  if (utmParams.utm_content) {
    url.searchParams.set('utm_content', utmParams.utm_content)
  }

  if (utmParams.utm_term) {
    url.searchParams.set('utm_term', utmParams.utm_term)
  }

  return url.toString()
}

/**
 * Gets the direct App Store URL (without OneLink).
 * Useful for fallback scenarios.
 *
 * @returns {string} Direct App Store URL
 */
export const getAppStoreUrl = (): string => {
  return APP_STORE_URL
}
