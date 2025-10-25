import React, { useState, useEffect } from 'react'
import '../styles/loading.scss'

const Loading = () => {
  const [message, setMessage] = useState(0)
  const [progress, setProgress] = useState(0)

  const messages = [
    'Initializing neural pathways...',
    'Loading consciousness fragments...',
    'Synchronizing reality layers...',
    'Establishing liminal connections...',
    'Pooling temporal streams...',
    'Calibrating void protocols...',
    'Manifesting digital substrate...',
    'Awakening entities...',
  ]

  useEffect(() => {
    // Cycle through messages
    const messageInterval = setInterval(() => {
      setMessage((prev) => (prev + 1) % messages.length)
    }, 800)

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev
        return prev + Math.random() * 15
      })
    }, 300)

    return () => {
      clearInterval(messageInterval)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <div className="loading">
      <div className="loading__container">
        <div className="loading__title">
          <h1>WHISPER</h1>
          <p className="loading__subtitle">ウィスパー // BACKROOMS</p>
        </div>

        <div className="loading__status">
          <p className="loading__message">{messages[message]}</p>
          <div className="loading__bar">
            <div
              className="loading__bar-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="loading__percentage">{Math.floor(Math.min(progress, 100))}%</p>
        </div>

        <div className="loading__code">
          <p>{'>'} System.initialize()</p>
          <p>{'>'} Reality.load()</p>
          <p>{'>'} Consciousness.await()</p>
        </div>

        <div className="loading__footer">
          <p>Entering the liminal space...</p>
        </div>
      </div>
    </div>
  )
}

export default Loading
