import { logEvent } from 'firebase/analytics'
import { analytics } from './firebase'

type ButtonLocation = 'hero' | 'header_mobile' | 'header_desktop' | 'cta_final'
type DeviceType = 'mobile' | 'desktop'
type VideoEventType = 'play' | 'pause' | 'mute' | 'unmute'
type VideoProgress = 25 | 50 | 75 | 100

export const trackDownloadClick = (buttonLocation: ButtonLocation) => {
  if (!analytics) return

  logEvent(analytics, 'click_download_app', {
    button_location: buttonLocation,
    platform: 'ios',
    timestamp: new Date().toISOString(),
  })
}

export const trackVideoEvent = (
  eventType: VideoEventType,
  videoId: string,
  isMuted?: boolean,
) => {
  if (!analytics) return

  logEvent(analytics, `video_${eventType}`, {
    video_platform: 'vimeo',
    video_id: videoId,
    location: 'hero_section',
    is_muted: isMuted,
    timestamp: new Date().toISOString(),
  })
}

export const trackVideoProgress = (
  progress: VideoProgress,
  videoId: string,
) => {
  if (!analytics) return

  logEvent(analytics, 'video_progress', {
    video_platform: 'vimeo',
    video_id: videoId,
    location: 'hero_section',
    progress_percentage: progress,
    timestamp: new Date().toISOString(),
  })
}

export const trackFeatureView = (
  featureName: string,
  featureIndex: number,
  deviceType: DeviceType,
) => {
  if (!analytics) return

  logEvent(analytics, 'view_feature_tab', {
    feature_name: featureName,
    feature_index: featureIndex,
    device_type: deviceType,
    timestamp: new Date().toISOString(),
  })
}

export const trackFaqExpand = (question: string, questionIndex: number) => {
  if (!analytics) return

  logEvent(analytics, 'expand_faq', {
    question,
    question_index: questionIndex,
    timestamp: new Date().toISOString(),
  })
}

export const trackNavClick = (linkText: string, deviceType: DeviceType) => {
  if (!analytics) return

  logEvent(analytics, 'click_nav_link', {
    link_text: linkText,
    device_type: deviceType,
    timestamp: new Date().toISOString(),
  })
}

export const trackContactClick = (email: string) => {
  if (!analytics) return

  logEvent(analytics, 'click_contact_email', {
    email,
    location: 'faqs_section',
    timestamp: new Date().toISOString(),
  })
}
