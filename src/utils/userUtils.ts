import { v4 as uuidv4 } from 'uuid'

const ANONYMOUS_ID_KEY = 'app_anonymous_id'
const USER_ID_KEY = 'app_user_id'

/**
 * Get or create anonymous ID for the user (client-side only)
 */
export const getOrCreateAnonymousId = (): string | undefined => {
  if (typeof window === 'undefined') return undefined

  try {
    let id = localStorage.getItem(ANONYMOUS_ID_KEY)

    if (!id) {
      id = uuidv4()
      localStorage.setItem(ANONYMOUS_ID_KEY, id || '')
    }

    return id || undefined
  } catch (error) {
    return undefined
  }
}

/**
 * Get user ID from localStorage (client-side only)
 */
export const getUserId = (): string | undefined => {
  if (typeof window === 'undefined') return undefined

  try {
    return localStorage.getItem(USER_ID_KEY) || undefined
  } catch (error) {
    return undefined
  }
}

/**
 * Set user ID in localStorage
 */
export const setUserId = (userId: string): void => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(USER_ID_KEY, userId)
  } catch (error) {
    console.error('Error setting user ID:', error)
  }
}

/**
 * Clear user ID from localStorage
 */
export const clearUserId = (): void => {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(USER_ID_KEY)
  } catch (error) {
    console.error('Error clearing user ID:', error)
  }
}

/**
 * Extract group ID from email
 */
export const extractGroupIdFromEmail = (email?: string): string | undefined => {
  if (!email) return undefined
  const parts = email.split('@')
  return parts.length === 2 ? parts[1] : undefined
}