import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../styles/frame.scss'

const Frame = ({ isMobile, page }) => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showMobileNotice, setShowMobileNotice] = useState(false)

  useEffect(() => {
    if (isMobile) {
      const hasSeenNotice = sessionStorage.getItem('mobileNoticeShown')
      if (!hasSeenNotice) {
        setShowMobileNotice(true)
        sessionStorage.setItem('mobileNoticeShown', 'true')
      }
    }
  }, [isMobile])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const closeMobileNotice = () => {
    setShowMobileNotice(false)
  }

  return (
    <div className="frame">
      <audio ref={audioRef} loop>
        <source src="/bgsong.mp3" type="audio/mpeg" />
      </audio>
      {showMobileNotice && (
        <div className="frame__mobile-notice">
          <div className="frame__mobile-notice-content">
            <h3>Better Experience on Desktop</h3>
            <p>
              For the best experience and optimal viewing,
              please visit this site on a desktop computer.
            </p>
            <button onClick={closeMobileNotice}>Got it</button>
          </div>
        </div>
      )}
      <div className="frame__copyright">
        2025 - WHISPER . All rights reserved.
      </div>
      <div className="frame__instructions">
        WHISPER BACKROOMS
      </div>
      <div className="frame__links">
        <button
          onClick={toggleMusic}
          className="frame__music-toggle"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? '🔊' : '🔇'}
        </button>
        <a
          href="https://x.com/whisper_terminal"
          target="_blank"
          rel="noreferrer"
          className="frame__x-link"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

Frame.propTypes = {
  isMobile: PropTypes.bool,
  page: PropTypes.string,
}

export default Frame
