import code_solid from "../../assets/images/code-solid.svg"
import react_icon from "../../assets/images/react.svg"
import booki from "../../assets/images/Booki.webp"
import ohmyfood from "../../assets/images/ohmyfood.webp"
import printit from "../../assets/images/Printit.webp"
import sophiebluel from "../../assets/images/SophieBluel.webp"
import kasa from "../../assets/images/Kasa.webp"
import argentbank from "../../assets/images/Argentbank.webp"
import Projet from "./Projet";

function Home () {
    return(
        <div className="main_container">
            <div className="container_apropos">
                <h1>A propos</h1>
                <p>Bonjour et bienvenue sur mon portfolio ! Je m'appelle Vincent Luyckx, un passionné d'informatique et de jeux vidéo. Cette passion m'a naturellement conduit vers le développement web, où je mets toute ma créativité et mes compétences au service de projets innovants. À travers ce portfolio, je vous invite à découvrir mes réalisations et mon parcours. N'hésitez pas à me contacter pour toute collaboration ou questions. Bonne visite !</p>
            </div>
            <div className="container_skill">
                <h1>Compétences et parcours</h1>
                <h2>Formation Intégrateur Web - OpenClassrooms</h2>
                <h3> Langages front-end </h3>
                <div className='small_container'>
                    <img src={code_solid} alt="Logo" className='icon_code'/>
                    <div className='text_container'>
                        <p>HTML</p>
                        <p>Sass</p>
                        <p>JavaScript</p>
                    </div>
                </div>
                <h3> Frameworks JavaScript </h3>
                <div className='small_container'>
                    <img src={react_icon} alt="Logo" className='icon_react'/>
                    <div className='text_container'>
                        <p>React</p>
                        <p>React Router</p>
                        <p>React Redux</p>
                    </div>
                </div>
                <h2>Licence informatique - Université Pierre et Marie Curie</h2>
                <h3> Langages de programation </h3>
                <div className='small_container'>
                    <img src={code_solid} alt="Logo" className='icon_code'/>
                    <div className='text_container'>
                        <p>C</p>
                        <p>Java</p>
                        <p>Python</p>
                    </div>
                </div>
            </div>
            <div className="container_projet">
                <h1>Projets</h1>
                <p>Voici un aperçu de mes projets effectués au cour de ma formation .</p>
                <div className="container_components">
                    <Projet
                        image={booki}
                        description="Front end de Booki un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix."
                        lien="https://github.com/MathusalemChevrefeuille/Projet3_Booki"
                        lien2="https://mathusalemchevrefeuille.github.io/Projet3_Booki/"
                        />
                    <Projet
                        image={ohmyfood}
                        description="Front end de Ohmyfood un site “mobile first” qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée"
                        lien="https://github.com/MathusalemChevrefeuille/Projet4_Ohmyfood"
                        lien2="https://mathusalemchevrefeuille.github.io/Projet4_Ohmyfood/"
                        />
                    <Projet
                        image={printit}
                        description="Front end de Print it un site Internet statique d’une petite imprimerie familiale ."
                        lien="https://github.com/MathusalemChevrefeuille/Projet5_Print-It"
                        lein2="https://mathusalemchevrefeuille.github.io/Projet5_Print-It/"
                        />
                    <Projet
                        image={sophiebluel}
                        description="Front end d'un site portfolio de l'architecte d’intérieur Sophie Bluel."
                        lien="https://github.com/MathusalemChevrefeuille/Projet6_SophieBluel"
                        />
                    <Projet
                        image={kasa}
                        description="Front end de Kasa un site location d’appartements entre particuliers."
                        lien="https://github.com/MathusalemChevrefeuille/Projet7-Kasa"
                        lien2="https://projet7-kasa-six.vercel.app/"
                        />  
                    <Projet
                        image={argentbank}
                        description="Front end de Argent Bank une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire."
                        lien="https://github.com/MathusalemChevrefeuille/Projet10_Argentbank"
                        />
                </div>
            </div>
            <div className="container_contact">
                <h1>Contact</h1>
                <p>Vous pouvez me joindre à tout moment par email à l'adresse suivante : vincentluyckx@protonmail.com</p>
            </div>
        </div>
    )
}


export default Home;