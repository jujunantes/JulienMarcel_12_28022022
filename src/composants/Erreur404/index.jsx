import { Link } from 'react-router-dom'

/**
 * Handles the non existing paths (404 error) and displays an error message
 * @returns {jsx}
 */
function Erreur404() {
    return (
    <div >
        <h1>Erreur 404</h1>
        <Link to='/' div className='LienStylise'>Retourner sur la page d'accueil</Link>
    </div>
    )
}

export default Erreur404