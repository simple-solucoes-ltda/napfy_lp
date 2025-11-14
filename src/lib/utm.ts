/**
 * UTM Parameter Management
 *
 * Captures and persists UTM campaign tracking parameters from URL.
 * Only captures parameters that are actually present in the URL.
 */

const UTM_STORAGE_KEY = 'napfy_utm_params'

export interface UtmParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}

/**
 * Captures UTM parameters from the current URL.
 * Only includes parameters that are present (doesn't force empty values).
 * Stores them in sessionStorage for use throughout the session.
 *
 * @returns {UtmParams} Object with UTM parameters (only those present)
 */
export const captureUtmParams = (): UtmParams => {
  if (typeof window === 'undefined') {
    return {}
  }

  const urlParams = new URLSearchParams(window.location.search)
  const utmParams: UtmParams = {}

  // Only add parameters that exist in the URL
  const source = urlParams.get('utm_source')
  if (source) utmParams.utm_source = source

  const medium = urlParams.get('utm_medium')
  if (medium) utmParams.utm_medium = medium

  const campaign = urlParams.get('utm_campaign')
  if (campaign) utmParams.utm_campaign = campaign

  const content = urlParams.get('utm_content')
  if (content) utmParams.utm_content = content

  const term = urlParams.get('utm_term')
  if (term) utmParams.utm_term = term

  // Store in sessionStorage if any UTMs were found
  if (Object.keys(utmParams).length > 0) {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmParams))
  }

  return utmParams
}

/**
 * Gets UTM parameters from sessionStorage.
 * Returns previously captured UTMs even if user navigates within the site.
 *
 * @returns {UtmParams} Object with stored UTM parameters
 */
export const getStoredUtmParams = (): UtmParams => {
  if (typeof window === 'undefined') {
    return {}
  }

  const stored = sessionStorage.getItem(UTM_STORAGE_KEY)
  if (!stored) {
    return {}
  }

  try {
    return JSON.parse(stored) as UtmParams
  } catch {
    return {}
  }
}

/**
 * Gets UTM parameters, preferring fresh capture over stored values.
 * Useful when you want to ensure the latest UTMs are used.
 *
 * @returns {UtmParams} Object with UTM parameters
 */
export const getUtmParams = (): UtmParams => {
  const freshParams = captureUtmParams()

  // If we captured fresh UTMs, use those
  if (Object.keys(freshParams).length > 0) {
    return freshParams
  }

  // Otherwise, use stored UTMs from earlier in the session
  return getStoredUtmParams()
}

/**
 * Clears stored UTM parameters.
 * Useful for testing or when starting a new campaign session.
 */
export const clearUtmParams = (): void => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(UTM_STORAGE_KEY)
  }
}
