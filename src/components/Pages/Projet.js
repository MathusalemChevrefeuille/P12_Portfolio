function Projet ({image,description,lien,lien2}){
    return(
        <div className="card">
            <img src={image} alt="Projet"/>
            <p>{description}</p>
            <a href={lien}>Lien Github</a>
            {lien2 ? <a href={lien2}>Lien deploiment</a> : null }
        </div>
    )
}

export default Projet ;