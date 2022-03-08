import { Row, Col } from 'react-bootstrap'
import MenuLateral from '../../composants/MenuLateral'

function Communaute() {
  return (
    <div className='conteneurCentral'>
      <Col md="1">
        <MenuLateral />
      </Col>
      <Col md="11">
        <h1>Communauté</h1>
      </Col>
    </div>
  )
}

export default Communaute
