import { useFetch } from '../../utils/hooks'
import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import MenuLateral from '../../composants/MenuLateral'
import TitreAccueil from '../../composants/TitreAccueil'
import CarteComposes from '../../composants/CarteComposes'
import ActiviteQuotidienne from '../../composants/ActiviteQuotidienne'
import DureeSessions from '../../composants/DureeSessions'
import RadarActivite from '../../composants/RadarActivite'
import CompletionObjectif from '../../composants/CompletionObjectif'


function Accueil() {

  /**
   * Switches user datas back and forth users 12 and 18 when
   * the visitor clicks on the background
   * See, line 43 : onClick={changeUtilisateur}
   */
  const [monUtilisateur, changeMonUtilisateur] = useState('12')
  function changeUtilisateur() {
    if (monUtilisateur === '12') {changeMonUtilisateur('18')} else {changeMonUtilisateur('12')}
  }
  
  const { donnees, isLoading, erreur } = useFetch('http://localhost:3000/user/' + monUtilisateur)
  
  if (erreur) {
    return <div>Une erreur s'est produite ! {erreur}</div>;
  }

  return (
    <div className='fondAccueil'>
        {isLoading ? (
        <div>
          <div>Chargement des données…</div>
        </div>
      ) : (
        <div className='conteneurCentral'>
          <Col lg="1">
            <MenuLateral />
          </Col>
          <Col lg="11">
            <div className='conteneurGénéral' onClick={changeUtilisateur}>
              <Row>
              <TitreAccueil prenom={donnees.data.userInfos.firstName} texte='Félicitation ! Vous avez explosé vos objectifs hier 👏' />
            </Row>
            <Row>
              <Col lg="9">
                <Row>
                  <ActiviteQuotidienne utilisateur={monUtilisateur} />
                </Row>
                <Row className='deuxiemeRangee'>
                  <DureeSessions utilisateur={monUtilisateur} />
                  <RadarActivite utilisateur={monUtilisateur} />
                  <CompletionObjectif utilisateur={monUtilisateur} />
                </Row>
              </Col>
              <Col lg="2" className='colonneComposes'>
                <CarteComposes compose='Calories' valeur={donnees.data.keyData.calorieCount.toLocaleString('en-US',{ minimumFractionDigits: 0 }) + 'KCal'} />
                <CarteComposes compose='Proteines' valeur={donnees.data.keyData.proteinCount.toLocaleString('en-US',{ minimumFractionDigits: 0 }) + 'g'} />
                <CarteComposes compose='Glucides' valeur={donnees.data.keyData.carbohydrateCount.toLocaleString('en-US',{ minimumFractionDigits: 0 }) + 'g'} />
                <CarteComposes compose='Lipides' valeur={donnees.data.keyData.lipidCount.toLocaleString('en-US',{ minimumFractionDigits: 0 }) + 'g'} />
              </Col>
            </Row>
            </div>
          </Col>
        </div>
      )}
    </div>
  )
}

export default Accueil
