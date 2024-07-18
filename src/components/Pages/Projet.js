function Projet ({image,description,titre,lien,lien2}){
    return(
        <div className="card">
            <img src={image} alt="Projet"/>
            <h3>{titre}</h3>
            <p>{description}</p>
            <a href={lien}>Lien Github</a>
            {lien2 ? <a href={lien2}>Lien deploiment</a> : null }
        </div>
    )
}

export default Projet ;