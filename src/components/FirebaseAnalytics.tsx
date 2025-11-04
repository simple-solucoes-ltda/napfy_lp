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
          console.log('✅ Firebase Analytics initialized successfully')
          console.log('Firebase Config:', {
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
          })
        } else {
          console.warn('⚠️ Firebase Analytics not supported on this browser')
        }
      } catch (error) {
        console.error('❌ Error initializing Firebase Analytics:', error)
      }
    }

    initAnalytics()
  }, [])

  return null
}
