import React, { useRef, useState } from 'react'
import '../styles/frame.scss'

const Frame = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

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

  return (
    <div className="frame">
      <audio ref={audioRef} loop>
        <source src="/bgsong.mp3" type="audio/mpeg" />
      </audio>
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
          href="https://github.com/blakesimpson-dev/blakesimpson.dev-react"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/logos/github-logo.png" height="18px" />
        </a>
      </div>
    </div>
  )
}

export default Frame
