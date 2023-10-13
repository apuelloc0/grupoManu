import React from 'react'
import tecnology from "../images/tecnology.png";
import consulting from "../images/consulting.png";
import mantenimiento from "../images/mantenimiento.png";
import civil from "../images/civil.png";
import ingenieros from "../images/ingenieros.jpg";
import "./Inicio.css";
import logotipomanu from "../images/logotipomanu.png";
import empresa1 from "../images/empresa1.png";
import empresa2 from "../images/empresa2.png";
import empresa3 from "../images/empresa3.png";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import SliderPrincipal from '../components/SliderPrincipal';


const Inicio = () => {
    return (
        <div className='Inicio'>

            <div className="Inicio-slider">

                <SliderPrincipal />

            </div>

            <div className="Inicio-title">
                <Fade bottom>
                    <h2>NUESTROS <span>SERVICIOS</span></h2>
                </Fade>
            </div>

            <div className="Inicio-aboutUs">
                <Fade>
                    <div>
                        <img src={tecnology} alt="" />
                        <h3>Tecnologías de recobro <br /> mejorado de crudo e <br /> ingeniería de producción</h3>
                    </div>
                    <div>
                        <img src={mantenimiento} alt="" />
                        <h3>Mantenimiento operacional e ingeniería y construcción de facilidades de superficie</h3>
                    </div>
                    <div>
                        <img src={consulting} alt="" />
                        <h3>Servicios de consultoría y entrenamiento en Oil & Gas</h3>
                    </div>
                    <div>
                        <img src={civil} alt="" />
                        <h3>Obras Civiles</h3>
                    </div>
                </Fade>
            </div>

            <div className="Inicio-information">
                <Fade left>
                    <div className="info">
                        <h1>MANU</h1>
                        <p><strong>Es un grupo de empresas especializadas en proveer soluciones para la industria del Petróleo y Gas.</strong> Nuestra sede principal se encuentra en la ciudad de Maracaibo, Venezuela, y desde 2010 venimos trabajando con diferentes compañías operadoras de crudo y gas entregando soluciones efectivas para el desarrollo de sus activos.</p>
                    </div>
                </Fade>

                <Fade right>
                    <img src={ingenieros} alt="" />
                </Fade>
            </div>

            <div className="Inicio-title">
                <Fade bottom>
                    <h2>EMPRESAS <span>ASOCIADAS</span></h2>
                </Fade>
            </div>

            <div className="Inicio-company">
                <Fade left>
                    <img src={empresa1} alt="" />
                </Fade>
                <Fade top>
                    <img src={empresa2} alt="" />
                </Fade>
                <Fade right>
                    <img src={empresa3} alt="" />
                </Fade>
            </div>

            <div className="Inicio-more">
                <h2>SOLICITA MÁS INFORMACIÓN</h2>
                <button><Link to='/contacto/'>AQUI</Link></button>
            </div>

            <div className="Inicio-footer">
                <img src={logotipomanu} alt="" />

                <ul>
                    <li className="location">Maracaibo, Venezuela</li>
                    <li className="location">Miami, USA.</li>
                    <li className="location">Barcelona, El Tigre. Venezuela
                    </li>
                    <li className="location">Houston,TX, USA.
                    </li>
                    <li className="location">Villahermosa, Mexico</li>
                </ul>
            </div>

            <div className="Inicio-copyright">
                <p>© 2023 Manu. Todos los Derechos Reservados</p>
            </div>

        </div>

    )
}

export default Inicio