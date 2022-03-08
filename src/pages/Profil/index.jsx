import { Row, Col } from 'react-bootstrap'
import MenuLateral from '../../composants/MenuLateral'

function Profil() {
  return (
    <div className='conteneurCentral'>
      <Col md="1">
        <MenuLateral />
      </Col>
      <Col md="11">
        <h1>Profil</h1>
      </Col>
    </div>
  )
}

export default Profil
