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

export default TitreAccueil