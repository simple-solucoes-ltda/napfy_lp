// TikTok Pixel helper functions
declare global {
  interface Window {
    ttq?: any
  }
}

export const trackTikTokEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track(eventName, params)
  }
}

// Standard TikTok Pixel events
export const trackTikTokPageView = () => {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.page()
  }
}

export const trackTikTokViewContent = (params?: {
  content_name?: string
  content_category?: string
  content_id?: string
  value?: number
  currency?: string
}) => {
  trackTikTokEvent('ViewContent', params)
}

export const trackTikTokClickButton = (params?: {
  content_name?: string
  content_category?: string
  content_id?: string
}) => {
  trackTikTokEvent('ClickButton', params)
}

export const trackTikTokContact = (params?: {
  content_name?: string
  content_id?: string
}) => {
  trackTikTokEvent('Contact', params)
}

export const trackTikTokDownload = (params?: {
  content_name?: string
  content_category?: string
  content_id?: string
}) => {
  trackTikTokEvent('Download', params)
}
