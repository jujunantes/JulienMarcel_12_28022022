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

export default CarteComposes