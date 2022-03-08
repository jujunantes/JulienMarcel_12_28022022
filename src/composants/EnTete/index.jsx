import { Link, NavLink } from 'react-router-dom'
import logoSportsee from '../../medias/LogoSportsee.svg'

function EnTete() {

    return (
    <div className='ConteneurNavigation lg'>
        <div className='divLogo'>
            <Link to="/">
                <img className='LogoStyle' src={logoSportsee} alt='logo de Sportsee' />
            </Link>
        </div>
        
        <div className='menuHaut'>
            <NavLink className="active" to='/' >Accueil</NavLink >
            <NavLink className="active" to='/profil' >Profil</NavLink >
            <NavLink className="active" to='/reglage' >Réglage</NavLink >
            <NavLink className="active" to='/communaute' >Communauté</NavLink >
        </div>
    </div>
    )
}

export default EnTete