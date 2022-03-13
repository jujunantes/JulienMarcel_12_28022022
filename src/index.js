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

var rectangleX
/**
 * Save in html's style balise the position of the mouse relative to the element
 * this function has been attached to by the following addEventListener.
 * It makes possible to compute how much of the DureeSessions component
 * has to be covered with its filter.
 * (See CSS' ".filtreHover" and ".conteneurSessions:hover > .filtreHover".)
 * @param {*} e 
 */
function sauvePositionSouris(e) {
  document.documentElement.style.setProperty('--x', (e.clientX - rectangleX))
}

// Idea comming from : https://toruskit.com/blog/how-to-get-element-bounds-without-reflow/
const observer = new IntersectionObserver((entry) => {
  rectangleX = entry[0].boundingClientRect.left
  document.documentElement.style.setProperty('--xRect', entry[0].boundingClientRect.width)

  observer.disconnect()
})

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
        observer.observe(document.querySelectorAll(".conteneurSessions")[0])
        window.addEventListener('mousemove', sauvePositionSouris)
      }
  }, 1000)
})

function metAJourTailleConteneurSession() {
  observer.observe(document.querySelectorAll(".conteneurSessions")[0])
}

window.onresize = metAJourTailleConteneurSession

ReactDOM.render(
  <React.StrictMode>
    <Router>
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
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)