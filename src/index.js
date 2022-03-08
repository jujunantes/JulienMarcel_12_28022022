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
import BlocCentral from './composants/BlocCentral'
import Erreur404 from './composants/Erreur404'

// On récupère la position de la souris pour certains effets sur les graphiques
// Code : https://dev.to/thalitag/step-by-step-guide-pass-your-cursor-position-using-css-variables-c7b
const pos = { x : 0, y : 0 }
const saveCursorPosition = function(x, y) {
  pos.x = (x / window.innerWidth).toFixed(3)
  pos.y = (y / window.innerHeight).toFixed(3)
  document.documentElement.style.setProperty('--x', pos.x)
  document.documentElement.style.setProperty('--y', pos.y)
}

document.addEventListener('mousemove', e => { saveCursorPosition(e.clientX, e.clientY); })

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <div class="wrapper">
      <Container className='container-fluid conteneurBootstrap'>
        <EnTete />
        <Row>
            <BlocCentral>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/reglage" element={<Reglage />} />
              <Route path="/communaute" element={<Communaute />} />
              <Route path="*" element={<Erreur404 />} />
            </Routes>
            </BlocCentral>
        </Row>
      </Container>
    </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)