import { logEvent } from 'firebase/analytics'
import { getFirebaseAnalytics } from './firebase'
import { trackMetaLead, trackMetaViewContent, trackMetaCustomEvent, trackMetaContact } from './meta-pixel'

type ButtonLocation = 'hero' | 'header_mobile' | 'header_desktop' | 'cta_final'
type DeviceType = 'mobile' | 'desktop'
type VideoEventType = 'play' | 'pause' | 'mute' | 'unmute'
type VideoProgress = 25 | 50 | 75 | 100

export const trackDownloadClick = async (buttonLocation: ButtonLocation) => {
  const analytics = await getFirebaseAnalytics()
  if (!analytics) return

  // Firebase Analytics
  logEvent(analytics, 'click_download_app', {
    button_location: buttonLocation,
    platform: 'ios',
    timestamp: new Date().toISOString(),
  })

  // Meta Pixel - Lead event (download intent)
  trackMetaLead({
    content_name: 'Download App',
    content_category: buttonLocation,
  })
}

export const trackVideoEvent = async (
  eventType: VideoEventType,
  videoId: string,
  isMuted?: boolean,
) => {
  const analytics = await getFirebaseAnalytics()
  if (!analytics) return

  // Firebase Analytics
  logEvent(analytics, `video_${eventType}`, {
    video_platform: 'vimeo',
    video_id: videoId,
    location: 'hero_section',
    is_muted: isMuted,
    timestamp: new Date().toISOString(),
  })

  // Meta Pixel - Custom event for video engagement
  if (eventType === 'play') {
    trackMetaViewContent({
      content_name: 'Product Video',
      content_type: 'video',
      content_category: 'hero_section',
    })
  }
}

export const trackVideoProgress = async (
  progress: VideoProgress,
  videoId: string,
) => {
  const analytics = await getFirebaseAnalytics()
  if (!analytics) return

  // Firebase Analytics
  logEvent(analytics, 'video_progress', {
    video_platform: 'vimeo',
    video_id: videoId,
    location: 'hero_section',
    progress_percentage: progress,
    timestamp: new Date().toISOString(),
  })

  // Meta Pixel - Custom event for video milestones
  trackMetaCustomEvent('VideoProgress', {
    progress_percentage: progress,
    video_id: videoId,
  })
}

export const trackFeatureView = async (
  featureName: string,
  featureIndex: number,
  deviceType: DeviceType,
) => {
  const analytics = await getFirebaseAnalytics()
  if (!analytics) return

  // Firebase Analytics
  logEvent(analytics, 'view_feature_tab', {
    feature_name: featureName,
    feature_index: featureIndex,
    device_type: deviceType,
    timestamp: new Date().toISOString(),
  })

  // Meta Pixel - ViewContent for feature engagement
  trackMetaViewContent({
    content_name: featureName,
    content_type: 'feature',
    content_category: 'product_features',
  })
}

export const trackFaqExpand = async (question: string, questionIndex: number) => {
  const analytics = await getFirebaseAnalytics()
  if (!analytics) return

  // Firebase Analytics
  logEvent(analytics, 'expand_faq', {
    question,
    question_index: questionIndex,
    timestamp: new Date().toISOString(),
  })

  // Meta Pixel - Custom event for FAQ engagement
  trackMetaCustomEvent('FAQExpand', {
    question,
    question_index: questionIndex,
  })
}

export const trackNavClick = async (linkText: string, deviceType: DeviceType) => {
  const analytics = await getFirebaseAnalytics()
  if (!analytics) return

  // Firebase Analytics
  logEvent(analytics, 'click_nav_link', {
    link_text: linkText,
    device_type: deviceType,
    timestamp: new Date().toISOString(),
  })

  // Meta Pixel - Custom event for navigation
  trackMetaCustomEvent('NavigationClick', {
    link_text: linkText,
    device_type: deviceType,
  })
}

export const trackContactClick = async (email: string) => {
  const analytics = await getFirebaseAnalytics()
  if (!analytics) return

  // Firebase Analytics
  logEvent(analytics, 'click_contact_email', {
    email,
    location: 'faqs_section',
    timestamp: new Date().toISOString(),
  })

  // Meta Pixel - Contact event (high intent)
  trackMetaContact({
    content_name: 'Email Contact',
    content_category: 'support',
  })
}
