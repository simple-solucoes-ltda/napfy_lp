import { initializeApp, getApps, type FirebaseApp } from 'firebase/app'
import { getAnalytics, type Analytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

let app: FirebaseApp | undefined
let analytics: Analytics | undefined

// Initialize Firebase
export const getFirebaseApp = () => {
  if (typeof window === 'undefined') return undefined

  if (!app && !getApps().length) {
    app = initializeApp(firebaseConfig)
  }

  return app || getApps()[0]
}

// Initialize Analytics
export const getFirebaseAnalytics = async () => {
  if (typeof window === 'undefined') return undefined

  if (!analytics) {
    const app = getFirebaseApp()
    if (app && await isSupported()) {
      analytics = getAnalytics(app)
    }
  }

  return analytics
}

export { app, analytics }
