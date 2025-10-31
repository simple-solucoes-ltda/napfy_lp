'use client'

import { useRef, useState, useEffect } from 'react'

export function VideoPlayer({ src }: { src: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [showPlayButton, setShowPlayButton] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  // Extract video ID from URL
  const getVideoId = (url: string) => {
    // Vimeo
    if (url.includes('vimeo.com')) {
      const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
      if (vimeoMatch) return { platform: 'vimeo', id: vimeoMatch[1] }
    }

    // YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const shortsMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/)
      if (shortsMatch) return { platform: 'youtube', id: shortsMatch[1] }
      const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/)
      if (watchMatch) return { platform: 'youtube', id: watchMatch[1] }
      const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
      if (shortMatch) return { platform: 'youtube', id: shortMatch[1] }
    }

    return { platform: 'unknown', id: url }
  }

  const video = getVideoId(src)

  const handlePlayClick = () => {
    if (iframeRef.current && video.platform === 'vimeo') {
      // Send play command to Vimeo iframe
      iframeRef.current.contentWindow?.postMessage('{"method":"play"}', '*')
      setShowPlayButton(false)
      setIsPlaying(true)
    }
  }

  const handlePauseClick = () => {
    if (iframeRef.current && video.platform === 'vimeo') {
      iframeRef.current.contentWindow?.postMessage('{"method":"pause"}', '*')
      setIsPlaying(false)
      setShowPlayButton(true)
    }
  }

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (iframeRef.current && video.platform === 'vimeo') {
      const newMutedState = !isMuted
      iframeRef.current.contentWindow?.postMessage(
        `{"method":"setVolume","value":${newMutedState ? 0 : 1}}`,
        '*'
      )
      setIsMuted(newMutedState)
    }
  }

  useEffect(() => {
    if (video.platform === 'vimeo') {
      // Listen for Vimeo player events
      const handleMessage = (event: MessageEvent) => {
        if (event.origin !== 'https://player.vimeo.com') return

        try {
          const data = JSON.parse(event.data)
          if (data.event === 'pause' || data.event === 'ended') {
            setShowPlayButton(true)
            setIsPlaying(false)
          } else if (data.event === 'play') {
            setShowPlayButton(false)
            setIsPlaying(true)
          }
        } catch (e) {
          // Ignore parsing errors
        }
      }

      window.addEventListener('message', handleMessage)
      return () => window.removeEventListener('message', handleMessage)
    }
  }, [video.platform])

  if (video.platform === 'vimeo') {
    return (
      <div className="relative w-full h-full bg-black overflow-hidden">
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${video.id}?api=1&autoplay=0&loop=0&muted=0&controls=0&title=0&byline=0&portrait=0`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            border: 'none',
            width: '100%',
            height: '100%',
            minWidth: '100%',
            minHeight: '100%'
          }}
        />
        {showPlayButton && (
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer z-10"
            aria-label="Play video"
          >
            <svg
              className="w-20 h-20 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" fill="white" opacity="0.9" />
              <path
                d="M9.5 8.5l7 3.5-7 3.5V8.5z"
                fill="#13B8A6"
              />
            </svg>
          </button>
        )}
        {isPlaying && (
          <>
            <div
              onClick={handlePauseClick}
              className="absolute inset-0 cursor-pointer z-[5]"
              aria-label="Pause video"
            />
            <button
              onClick={handleToggleMute}
              className="absolute bottom-6 right-6 p-2.5 bg-black/60 hover:bg-black/80 rounded-full transition-colors z-10 shadow-lg"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              )}
            </button>
          </>
        )}
      </div>
    )
  }

  // YouTube fallback
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${video.id}?autoplay=0&mute=0&loop=0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          border: 'none',
          width: '100%',
          height: '100%',
          minWidth: '100%',
          minHeight: '100%'
        }}
      />
    </div>
  )
}
