import { useState } from 'react'
import { useFetch } from '../../utils/hooks'
import { Row, Col } from 'react-bootstrap'
import TitreAccueil from '../../composants/TitreAccueil'
import CarteComposes from '../../composants/CarteComposes'
import ActiviteQuotidienne from '../../composants/ActiviteQuotidienne'


function Accueil() {
  const [monUtilisateur, changeMonUtilisateur] = useState([18])
  const { donnees, isLoading, erreur } = useFetch('http://localhost:3000/user/' + monUtilisateur)

  function changeUtilisateur() {
    if(monUtilisateur === '12') { changeMonUtilisateur('18')} else { changeMonUtilisateur('12')}
  }
  
  if (erreur) {
    return <div>Une erreur s'est produite ! {erreur}</div>;
  }
  
  console.log(donnees)

  return (
    <div>
        {isLoading ? (
        <div>
          <div>Chargement des données…</div>
        </div>
      ) : (
        <div className='conteneurGénéral'>
          <Row>
            <TitreAccueil prenom={donnees.data.userInfos.firstName} texte='Félicitation ! Vous avez explosé vos objectifs hier 👏' onClick={changeUtilisateur} />
          </Row>
          <Row className='gx-5'>
            <Col md="9">
              <Row>
                <ActiviteQuotidienne utilisateur={monUtilisateur} />
              </Row>
              <Row>
              </Row>
            </Col>
            <Col md="2">
              <CarteComposes compose='Calories' valeur={donnees.data.keyData.calorieCount.toLocaleString('en-US',{ minimumFractionDigits: 0 }) + 'KCal'} />
              <CarteComposes compose='Proteines' valeur={donnees.data.keyData.proteinCount.toLocaleString('en-US',{ minimumFractionDigits: 0 }) + 'g'} />
              <CarteComposes compose='Glucides' valeur={donnees.data.keyData.carbohydrateCount.toLocaleString('en-US',{ minimumFractionDigits: 0 }) + 'g'} />
              <CarteComposes compose='Lipides' valeur={donnees.data.keyData.lipidCount.toLocaleString('en-US',{ minimumFractionDigits: 0 }) + 'g'} />
            </Col>
          </Row>
        </div>
      )}
    </div>
  )
}

export default Accueil
