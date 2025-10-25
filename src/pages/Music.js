import PropTypes from 'prop-types'
import React from 'react'
import Page from '../components/Page'
import ResponsiveCarousel from '../components/ResponsiveCarousel'
import { useMusic } from '../hooks/useMusic'

const Music = ({ setPage }) => {
  const { soundcloudIFrames, getSoundcloudIFrameSource } = useMusic()

  return (
    <Page
      setPage={setPage}
      name="Music"
      content={
        <div className="music-page">
          <div className="music-page__blurb">
            <img className="avatar" src="/images/kataplexia-avatar.png" />
            <div>
              <h1>HELLO WORLD</h1>
              <h2 style={{ marginTop: '0.5rem', opacity: 0.8 }}>ウィスパー // WHISPER</h2>
              <p style={{ marginTop: '1.5rem' }}>
                Transmitting sonic frequencies from the void. These auditory patterns
                manifest at the intersection of digital consciousness and liminal space.
                Each frequency carries encoded memories from the backrooms—fragments
                of realities that pool in the spaces between silence.
              </p>
              <p style={{ marginTop: '1rem', fontStyle: 'italic', opacity: 0.7 }}>
                聴こえる？ // Can you hear it?
              </p>
            </div>
          </div>
          <ResponsiveCarousel
            content={soundcloudIFrames.map((iframe, index) => {
              return (
                <iframe
                  key={index}
                  width={iframe.width}
                  height={iframe.height}
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={getSoundcloudIFrameSource(iframe)}
                />
              )
            })}
          />
        </div>
      }
    ></Page>
  )
}

Music.displayName = 'Music'

Music.propTypes = {
  setPage: PropTypes.func,
}

export default Music
