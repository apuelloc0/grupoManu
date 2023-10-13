import React from 'react';
import "./Footer.css";
import logotipomanu from "../images/logotipomanu.png";


const Footer = () => {
    return (
        <div>
            <div className="Footer-footer">
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

            <div className="Footer-copyright">
                <p>© 2023 Manu. Todos los Derechos Reservados</p>
            </div>
        </div>
    )
}

export default Footer