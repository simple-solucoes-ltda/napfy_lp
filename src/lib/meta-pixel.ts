// Meta Pixel helper functions

export const trackMetaEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined') {
    import('react-facebook-pixel')
      .then((module) => module.default)
      .then((ReactPixel) => {
        ReactPixel.track(eventName, params)
      })
  }
}

// Standard Meta Pixel events
export const trackMetaPageView = () => {
  trackMetaEvent('PageView')
}

export const trackMetaViewContent = (params?: {
  content_name?: string
  content_category?: string
  content_ids?: string[]
  content_type?: string
  value?: number
  currency?: string
}) => {
  trackMetaEvent('ViewContent', params)
}

export const trackMetaLead = (params?: {
  content_name?: string
  content_category?: string
  value?: number
  currency?: string
}) => {
  trackMetaEvent('Lead', params)
}

export const trackMetaCompleteRegistration = (params?: {
  content_name?: string
  status?: string
  value?: number
  currency?: string
}) => {
  trackMetaEvent('CompleteRegistration', params)
}

export const trackMetaContact = (params?: {
  content_name?: string
  content_category?: string
}) => {
  trackMetaEvent('Contact', params)
}

// Custom Meta Pixel events
export const trackMetaCustomEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined') {
    import('react-facebook-pixel')
      .then((module) => module.default)
      .then((ReactPixel) => {
        ReactPixel.trackCustom(eventName, params)
      })
  }
}
