import { Row, Col } from 'react-bootstrap'
import MenuLateral from '../../composants/MenuLateral'

function Reglage() {
  return (
    <div className='conteneurCentral'>
      <Col md="1">
        <MenuLateral />
      </Col>
      <Col md="11">
        <h1>Réglage</h1>
      </Col>
    </div>
  )
}

export default Reglage
