import "./index.css"
import ilustracao from "../../assets/ilustracao.svg"
const Main=()=>{
    return(
        <div className="content">
        <div className="card">
            <h5 className="subtitle">Everything <blockquote>to sell</blockquote> anything</h5>
            <section className="details">
                <blockquote>
                    <p>Start your free website trial today.</p>
                </blockquote>
                <p>No credit card required.</p>
                <button className="start-main">Get started</button>
            </section>
        </div>
        <div className="ilustra">
            <img src={ilustracao} alt="imagem" />
        </div>
        <div className="footer-container">
            <h4>space</h4>
           
            <h6 className="author">copyright @romiltoncosta</h6>
        </div>
        </div>
    )
};
export default Main;