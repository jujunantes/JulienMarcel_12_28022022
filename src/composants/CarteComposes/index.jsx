import PropTypes from 'prop-types'

/**
 * Displays an info card about a key number
 * @param {object} props
 * @returns {jsx}
 */
function CarteComposes(props) {
    return (
        <div className="carteComposes">
            <img className="iconeCompose" src={require('../../medias/' + props.compose + '.svg')} alt={props.compose} />
            <div className="texteCompose">
                <div className="valeurCompose">
                    {props.valeur}
                </div>
                <div className="nomCompose">
                    {props.compose}
                </div>
            </div>
        </div>
    
    )
}

CarteComposes.propTypes = {
    valeur: PropTypes.string,
    compose: PropTypes.string
}

export default CarteComposes