/**
 * Anonymous ID Management
 *
 * Generates and persists a unique identifier for web visitors.
 * Used to connect Landing Page sessions with App sessions in Amplitude.
 */

const ANONYMOUS_ID_KEY = 'napfy_anonymous_id'

/**
 * Gets or generates an anonymous ID for the current user.
 * The ID is stored in localStorage and persists across sessions.
 *
 * @returns {string} UUID v4 string (e.g., "abc-123-def-456")
 */
export const getAnonymousId = (): string => {
  // Only run in browser
  if (typeof window === 'undefined') {
    return ''
  }

  // Check if ID already exists in localStorage
  const existingId = localStorage.getItem(ANONYMOUS_ID_KEY)
  if (existingId) {
    return existingId
  }

  // Generate new UUID and store it
  const newId = crypto.randomUUID()
  localStorage.setItem(ANONYMOUS_ID_KEY, newId)

  return newId
}

/**
 * Clears the stored anonymous ID.
 * Useful for testing or user logout scenarios.
 */
export const clearAnonymousId = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(ANONYMOUS_ID_KEY)
  }
}
