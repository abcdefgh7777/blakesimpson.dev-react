import { motion, useAnimationControls } from 'framer-motion'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useMotion } from '../hooks/useMotion'
import '../styles/menu.scss'

let useInitialMotion = true

const Menu = ({ page, setPage }) => {
  const controls = useAnimationControls()
  const { menuMotion } = useMotion()

  useEffect(() => {
    const initialSequence = async () => {
      await controls.start('visibleInitial')
      useInitialMotion = false
    }

    switch (page) {
      case 'Home':
        useInitialMotion ? initialSequence() : controls.start('visible')
        break

      default:
        controls.start('hidden')
        break
    }
  }, [page])

  return (
    <motion.div
      className="menu"
      variants={menuMotion}
      initial="hidden"
      animate={controls}
    >
      <div className="menu__title">
        <div>&lt;WHISPER /&gt;</div>
        <div>WHISPER</div>
      </div>
      <div className="menu__buttons">
        <button onClick={() => window.open('https://backrooms.whisperterminal.xyz/', '_blank')}>backrooms</button>
        <button onClick={() => setPage('Projects')}>pjs</button>
        <button onClick={() => setPage('About')}>WHISPER</button>
        <button onClick={() => window.open('https://x.com/whisper_terminal', '_blank')}>X</button>
      </div>
    </motion.div>
  )
}

Menu.displayName = 'Menu'

Menu.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func,
}

export default Menu
