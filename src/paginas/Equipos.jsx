import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Equipos.css"
import Fade from 'react-reveal/Fade';
import { Slider, Slider5 } from '../components/Slider.jsx'


const Equipos = () => {
    return (
        <div className='Equipos'>
            <Header />

            <div className="Equipos-title">
                <Fade bottom>
                    <h1>EQUIPOS</h1>
                </Fade>
            </div>

            <div className="Equipos-subtitle">
                <Fade bottom>
                    <h2>LÍNEA DE EQUIPOS PARA INYECCIÓN DE VAPOR</h2>
                </Fade>
            </div>

            <div className="Equipos-container">
                <Fade left>
                    <div className='text'>
                        <ul>
                            <li> Sistemas de Tratamiento de Agua basado en tecnologías:
                            </li>
                            <li> Equipos para Gerenciamiento y Manejo de Agua
                            </li>
                            <li> Diseño y Manufactura de Equipos para Crudo Pesado (separadores, gas scrubber, bombas para inyección de quimicos)
                            </li>
                            <li> Sistemas de Automatization y Control para inyección de vapor y tratamiento de agua
                            </li>
                            <li> Paneles de Control Computarizado
                            </li>
                            <li> Sistemas de Valvulas de Control y Oleoductos
                            </li>
                            <li> Aseguramiento y Pruebas de Calidad de Vapor

                            </li>
                        </ul>
                    </div>
                </Fade>

                <Fade right>
                    <div className="slider">
                        <Slider5 />
                    </div>
                </Fade>
            </div>

            <div className="Equipos-subtitle">
                <Fade bottom>
                    <h2>LÍNEA DE EQUIPOS Y SERVICIOS PARA SISTEMAS DE CALENTAMIENTO (HEATERS)
                    </h2>
                </Fade>
            </div>

            <div className="Equipos-container">

                <Fade left>
                    <div className="slider">
                        <Slider />
                    </div>
                </Fade>

                <div className='text'>
                    <Fade right>
                        <ul>
                            <li> Calentadores de Lineas de Superficie
                            </li>
                            <li> Tanques Calentadores
                            </li>
                            <li> Transformadores, Plantas Eléctricas
                            </li>
                            <li> Paneles de Control Computarizado
                            </li>
                            <li> Cables de Potencia / Cables de Sensores
                            </li>
                            <li> Downhole sensor w/carrier
                            </li>
                            <li> Sensores, transmisores y medidores de flujo
                            </li>
                            <li> Equipos de flejes
                            </li>
                            <li> Medición de presión y temperatura en tiempo real en pozos durante el proceso de inyección de vapor con tecnología de cable vibrador (vibrating wire)

                            </li>
                        </ul>
                    </Fade>
                </div>

            </div>

            <div className="Equipos-subtitle">
                <Fade bottom>
                    <h2>LÍNEA DE EQUIPOS Y SERVICIOS PARA SISTEMAS DE INSTRUMENTACIÓN DE FONDO DE POZO (SENSORES DE P,T)
                    </h2>
                </Fade>
            </div>

            <div className="Equipos-container">
                <div className='text'>
                    <Fade left>
                        <ul>
                            <li> Sensores de fondo para aplicaciones térmicas (Alta Temperatura / Alta Presión)
                            </li>
                            <li> Sistemas de adquisición de datos (dataloggers)
                            </li>
                            <li> Carriers, housing, heavy duty collar protectors
                            </li>
                            <li> Transductores, cables de sensores
                            </li>
                            <li> Servicios de asistencia técnica en campo para su instalación
                            </li>

                        </ul>
                    </Fade>
                </div>

                <Fade right>
                    <div className="slider">
                        <Slider />
                    </div>

                </Fade>
            </div>

            <div className="Equipos-subtitle">
                <Fade bottom>
                    <h2>LÍNEA DE EQUIPOS Y SERVICIOS PARA PROYECTOS DE INGENIERÍA Y CONSTRUCCIÓN (IPC)
                    </h2>
                </Fade>
            </div>

            <div className="Equipos-container">

                <Fade left>
                    <div className="slider">
                        <Slider />
                    </div>
                </Fade>

                <div className='text'>
                    <Fade right>
                        <ul>
                            <li> Maquinaria pesada y equipos de construcción: retro-cavadoras, vibro- compactadoras, payloaders, maquinaria para asfaltado, camiones de carga y transporte.
                            </li>
                            <li> Servicios de adecuación y saneamiento, manejo y transporte de desechos peligrosos.
                            </li>
                            <li> Construcción de carreteras y puentes, puertos y aeropuertos, hormigón reformado, terraplenes y carreteras, infraestructura de servicios públicos, soluciones ambientales.
                            </li>
                            <li> Líneas de flujo, oleoductos, separadores y sistemas de tratamiento de crudo y agua, conexiones de superficie y de pozos, adecuación de locaciones y mantenimiento de facilidades de producción.
                            </li>
                            <li> Servicios de consultora y entrenamiento al personal (Training Services).</li>

                        </ul>
                    </Fade>
                </div>


            </div>

            <Footer />
        </div>
    )
}

export default Equipos