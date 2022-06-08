import React ,{useEffect,useState} from 'react'
import { useTransition, animated ,config } from '@react-spring/web'
import './apercuTitre.css'

const ApercuTitre = () => { 
    const [show, set] = useState(false)
    const transitions = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: show,
      delay: 200,
      config: config.molasses,
      onRest: () => set(!show),
    })
    return transitions(
      (styles, item) => item && <animated.div style={styles}>
          {/* ✌️ */}
          <h1 className="hood "   width="170"  height="30">Apperçu des Professeurs</h1>
          </animated.div>
    )
  }

export default ApercuTitre