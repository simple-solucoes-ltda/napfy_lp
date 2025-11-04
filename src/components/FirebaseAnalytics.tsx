'use client'

import { useEffect, useState } from 'react'
import { getFirebaseAnalytics } from '@/lib/firebase'

export function FirebaseAnalytics() {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const initAnalytics = async () => {
      try {
        const analytics = await getFirebaseAnalytics()
        if (analytics) {
          setInitialized(true)
        }
      } catch (error) {
        console.error('Error initializing Firebase Analytics:', error)
      }
    }

    initAnalytics()
  }, [])

  return null
}
