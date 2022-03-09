import PropTypes from 'prop-types'

/**
 * Displays the main page's title and a welcoming message
 * @param {object} props 
 * @returns {jsx}
 */
function TitreAccueil(props) {
    return (
        <div>
            <div className="TitreAccueil">
                <div>Bonjour</div><div className="prenom">{props.prenom}</div>
            </div>
            <div className="texteAccueil">{props.texte}</div>
        </div>
    
    )
}

TitreAccueil.propTypes = {
    props: PropTypes.object
}

export default TitreAccueil