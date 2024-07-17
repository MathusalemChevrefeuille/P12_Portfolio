function Projet ({image,description,lien}){
    return(
        <div className="card">
            <img src={image} alt="Projet"/>
            <p>{description}</p>
            <a href={lien}>Lien Github</a>
        </div>
    )
}

export default Projet ;