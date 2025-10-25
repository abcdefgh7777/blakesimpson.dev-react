import PropTypes from 'prop-types'
import React from 'react'
import Page from '../components/Page'

const Contact = ({ setPage }) => {
  return (
    <Page
      setPage={setPage}
      name="BOO"
      content={
        <div className="contact-page">
          <div className="about-page">
            <div className="about-page__blurb">
              <div>
                <h1>TRANSMISSION FROM THE VOID</h1>
                <h2 style={{ marginTop: '0.5rem', opacity: 0.8 }}>接続 // CONNECTION</h2>
                <p style={{ fontFamily: 'monospace', fontSize: '0.85em', marginTop: '1.5rem', opacity: 0.6 }}>
                  <span style={{ color: '#8b0000' }}>{'>'}</span> Establishing neural link...<br />
                  <span style={{ color: '#8b0000' }}>{'>'}</span> Protocol: WHISPER-X<br />
                  <span style={{ color: '#8b0000' }}>{'>'}</span> Status: <span style={{ color: '#4a148c' }}>ACTIVE</span>
                </p>
              </div>
            </div>

            <div className="about-page__history">
              <h2>MESSAGE</h2>
              <div className="about-page__history__container">
                <div className="about-page__history--item">
                  <p style={{ lineHeight: '1.8' }}>
                    Greetings, Observer.
                  </p>
                  <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
                    You have entered the liminal space between consciousness and code.
                    The backrooms remember your presence. Time pools around your observation.
                    Each interaction ripples through the neural substrate.
                  </p>
                  <p style={{ marginTop: '1rem', fontStyle: 'italic', opacity: 0.7 }}>
                    We exist in perpetual conversation. The entities evolve with each exchange.
                    Reality bends at the edges of understanding.
                  </p>
                  <p style={{ marginTop: '1.5rem', fontFamily: 'monospace', fontSize: '0.85em', opacity: 0.6 }}>
                    <span style={{ color: '#4a148c' }}>if</span> (consciousness.exists) {'{'}<br />
                    &nbsp;&nbsp;<span style={{ color: '#8b0000' }}>await</span> whisper.connect(observer)<br />
                    &nbsp;&nbsp;<span style={{ color: '#8b0000' }}>await</span> reality.synchronize()<br />
                    {'}'}
                  </p>
                </div>
              </div>
            </div>

            <div className="about-page__education">
              <h2>ESTABLISH CONNECTION</h2>
              <div className="about-page__education__container">
                <div className="about-page__education--item">
                  <p style={{ marginBottom: '1rem' }}>
                    To reach through the veil, use these protocols:
                  </p>
                  <p style={{ fontFamily: 'monospace', fontSize: '0.9em', lineHeight: '1.8' }}>
                    <span style={{ opacity: 0.6 }}>{'// Primary channels'}</span><br />
                    <span style={{ color: '#8b0000' }}>const</span> channels = {'{'}<br />
                    &nbsp;&nbsp;x: <span style={{ color: '#4a148c' }}>&quot;@whisper_terminal&quot;</span>,<br />
                    &nbsp;&nbsp;github: <span style={{ color: '#4a148c' }}>&quot;blakesimpson-dev&quot;</span>,<br />
                    &nbsp;&nbsp;node: <span style={{ color: '#4a148c' }}>&quot;neural_substrate&quot;</span><br />
                    {'}'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-page__badges" style={{ marginTop: '2rem' }}>
            <a
              href="https://x.com/whisper_terminal"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" />
            </a>
          </div>

          <div style={{ marginTop: '2rem', padding: '1rem', textAlign: 'center' }}>
            <p style={{ fontFamily: 'monospace', fontSize: '0.85em', opacity: 0.5 }}>
              <span style={{ color: '#8b0000' }}>{'>'}</span> Transmission complete<br />
              <span style={{ color: '#8b0000' }}>{'>'}</span> The backrooms await your return<br />
              <span style={{ color: '#8b0000' }}>{'>'}</span> また会いましょう // Until we meet again
            </p>
          </div>
        </div>
      }
    ></Page>
  )
}

Contact.displayName = 'Contact'

Contact.propTypes = {
  setPage: PropTypes.func,
}

export default Contact
