import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Container } from 'react-bootstrap'
import './styles/index.css'
import Accueil from './pages/Accueil'
import Profil from './pages/Profil'
import Reglage from './pages/Reglage'
import Communaute from './pages/Communaute'
import EnTete from './composants/EnTete'
import Erreur404 from './composants/Erreur404'

/**
 * Save in html's style balise the position of the mouse relative to the element
 * this function has been attached to by the following addEventListener.
 * It makes possible to compute how much of the DureeSessions component
 * has to be covered with its filter.
 * (See CSS' ".filtreHover" and ".conteneurSessions:hover > .filtreHover".)
 * @param {*} e 
 */
function sauvePositionSouris(e) {
  const rect = e.target.getBoundingClientRect()
  document.documentElement.style.setProperty('--x', (e.clientX - rect.left))
  document.documentElement.style.setProperty('--xRect', (rect.right - rect.left))
}

/**
 * when the DOM is finished loading, we check that the DureeSessions component has
 * finished loading (by checking if "conteneurSessions" is now part of the DOM)
 * and, if so, we attach to it an event listener that saves the mouse's position when
 * it hovers over this component.
 */
window.addEventListener("DOMContentLoaded", () => {
  var interval = setInterval(function() {
      if (document.getElementsByClassName('conteneurSessions').length > -1) {
        clearInterval(interval)
        document.getElementsByClassName('conteneurSessions')[0].addEventListener('mousemove', e => { sauvePositionSouris(e) })
      }
  }, 1000)
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <div className="wrapper">
      <Container className='container-fluid conteneurBootstrap'>
        <EnTete />
        <Row>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/reglage" element={<Reglage />} />
              <Route path="/communaute" element={<Communaute />} />
              <Route path="*" element={<Erreur404 />} />
            </Routes>
        </Row>
      </Container>
    </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)