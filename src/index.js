import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'
import './styles/index.css'
import Accueil from './pages/Accueil'
import Profil from './pages/Profil'
import Reglage from './pages/Reglage'
import Communaute from './pages/Communaute'
import EnTete from './composants/EnTete'
import MenuLateral from './composants/MenuLateral'
import BlocCentral from './composants/BlocCentral'
import Erreur404 from './composants/Erreur404'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container>
        <EnTete />
        <Row>
          <Col md="1">
            <MenuLateral />
          </Col>
          <Col md="11">
            <BlocCentral>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/reglage" element={<Reglage />} />
              <Route path="/communaute" element={<Communaute />} />
              <Route path="*" element={<Erreur404 />} />
            </Routes>
            </BlocCentral>
          </Col>
        </Row>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)