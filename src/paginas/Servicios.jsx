import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Servicios.css"
import { Slider, Slider1, Slider2, Slider3, Slider4 } from '../components/Slider.jsx'


const Servicios = () => {
    return (

        <div className='Servicios'>
            <Header />

            <div className="Servicios-title">
                <h1>SERVICIOS</h1>
            </div>

            <div className="Servicios-container">
                <div className='text'>
                    <h3>TECNOLOGÍAS DE RECOBRO MEJORADO E INGENIERÍA DE PRODUCCIÓN</h3>
                    <p>Servicios de Inyección de Vapor para Recuperación de Crudos Pesados. Suministro de equipos y herramientas para proyectos de Recobro Térmico de Crudo Pesado, tales como: Generadores de vapor, Sistemas de Tratamiento de Agua, Tubería Pre-aislada (vacuum insulted tubing, VIT), Calentadores Eléctricos (fondo y superficie), Sistemas para Monitoreo de Fondo (Sensores Presión y Temperatura), Sistema de Automatización y Control de Procesos.

                    </p>
                </div>

                <div className="slider">
                    <Slider />
                </div>
            </div>

            <div className="Servicios-container">

                <div className="slider">
                    <Slider1 />
                </div>

                <div className='text'>
                    <h3>MANTENIMIENTO OPERACIONAL E INGENIERÍA DE FACILIDADES EN SUPERFICIE DE SISTEMAS DE PRODUCCIÓN DE CRUDO
                    </h3>
                    <p>Líneas de flujo, oleoductos, separadores y sistemas de tratamiento de crudo y agua, conexiones de superficie y de pozos, adecuación de locaciones y mantenimiento de facilidades de producción, servicios de pruebas de pozos con equipos multifásicos.

                    </p>
                </div>

            </div>

            <div className="Servicios-container">
                <div className='text'>
                    <h3>OBRAS CIVILES
                    </h3>
                    <p>Construcción de carreteras y puentes, puertos y aeropuertos, hormigón reformado, terraplenes y carreteras, infraestructura de servicios públicos, soluciones ambientales.

                    </p>
                </div>

                <div className="slider">
                    <Slider2 />
                </div>
            </div>

            <div className="Servicios-container">

                <div className="slider">
                    <Slider3 />
                </div>

                <div className='text'>
                    <h3>SERVICIOS DE CONSULTORÍA Y ENTRENAMIENTO EN OIL & GAS
                    </h3>
                    <p>Estudios integrados de caracterización de yacimientos, recuperación mejorada de crudo EOR, entrenamiento en fundamentos de ingeniería de yacimientos e ingeniería de producción, perforación, completación e intervención de pozos.

                    </p>
                </div>

            </div>

            <div className="Servicios-container">
                <div className='text'>
                    <h3>AUTOMATIZACIÓN E INSTRUMENTACIÓN DE PROCESOS INDUSTRIALES
                    </h3>

                    <ul>
                        <li>Suministro y programación de PLC de diversas marcas (Rockwell, Siemens, otros).</li>
                        <li>Suministro y programación SCD (DCS en inglés)
                            Suministro y programación de IHM (HMI en inglés) de diversa marcas.</li>
                        <li>uministro y configuración de instrumentación inteligente de campo (HART, DEVICENET, PROFIBUS DP, otros), incluye transmisores de presión, temperatura, vibración (incluye Wireless)</li>
                        <li>Instalación y configuración de redes industriales (modus RTU, modbus TCP/IP, controlnet, ethernet/IP, devicenet, profibus DP, otras)</li>
                        <li>Suministro, configuración e instalación de válvulas de control inteligentes (ROTORK, otras)</li>
                        <li>Suministro de proyectos de automatización llave en mano.</li>
                        <li>Instalación, configuración de despliegues y puesta en marcha de SCADA de diversas marcas (Experion, Wonderware, DELTA V, otros)</li>
                        <li>Configuración de sistemas de Parada de Emergencia (ESD) y de Fuego y Gas (F&G) Honeywell (FSC) y Siemens (MOORE).</li>
                        <li>Suministro, instalación y configuración de VFD de baja tensión de diversas marcas (Rockwell, Siemens, otros)</li>

                    </ul>
                </div>

                <div className="slider">
                    <Slider4 />
                </div>
            </div>

            <div className="Servicios-container">

                <div className="slider">
                    <Slider3 />
                </div>

                <div className='text'>
                    <h3>MEDICIÓN DE FLUJO MULTIFÁCICO (CRUDO, AGUA Y GAS)
                    </h3>
                    <p>Instalado sobre SKID
                        Medición de caudales desde 350 – 3750 BPD
                        0 – 100% Corte de agua.
                        0-100% GVF
                        Trabaja con viscosidades hasta 5000 cp.
                        La medición es independiente de la densidad y la salinidad.
                        No se emplean dispositivos de radiación Nuclear.
                        No se requiere calibración individual para cada pozo a ser probado.
                        Mediciones con régimen de flujo turbulento o laminar.
                        Alimentación en 24 Vdc o 120Vac</p>
                </div>


            </div>

            <Footer />
        </div>
    )
}

export default Servicios