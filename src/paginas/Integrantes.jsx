import React, { useState } from 'react'
import "./Integrantes.css";
import Header from "../components/Header";
import cap from "../images/cap-manu.png";
import like from "../images/like.png";
import security from "../images/security.png";
import nature from "../images/nature.png";
import collaboration from "../images/collaboration.png";
import mind from "../images/mind.png";
import light from "../images/light.png";
import compe from "../images/compe.png";
import Footer from '../components/Footer';
import Fade from 'react-reveal/Fade';


const Integrantes = () => {

    const [parrafo1, setParrafo1] = useState('active')
    const [parrafo2, setParrafo2] = useState('')
    const [parrafo3, setParrafo3] = useState('')

    const activeValue1 = () => {
        if (parrafo1 === 'active') {
            return
        }
        else {
            setParrafo1('active')
            setParrafo2('')
            setParrafo3('')
        }
    }

    const activeValue2 = () => {
        if (parrafo2 === 'active') {
            return
        }
        else {
            setParrafo1('')
            setParrafo2('active')
            setParrafo3('')
        }
    }
    const activeValue3 = () => {
        if (parrafo3 === 'active') {
            return
        }
        else {
            setParrafo1('')
            setParrafo2('')
            setParrafo3('active')
        }
    }

    return (
        <div className='Integrantes'>

            <Header />

            <div className="Integrantes-statement">
                <Fade bottom>
                    <h1>QUIENES SOMOS</h1>
                </Fade>
            </div>

            <div className="Integrantes-information">
                <Fade>
                    <img src={cap} alt="" />
                </Fade>
                <div>
                    <span>MANU</span>
                    <p><b>Somos un grupo de empresas especializadas en proveer soluciones tecnológicas para el sector de los hidrocarburos.</b> Nuestra sede principal se encuentra ubicada en la ciudad de Maracaibo, Venezuela, desde 2006 venimos trabajando como aliados de diferentes compañías operadores de crudo y gas entregando resultados efectivos en el desarrollo de sus activos. Contamos con amplio staff de profesionales calificados en el área y presencia en las ciudades de El Tigre y Barcelona en Venezuela, Houston, TX y Miami FL en USA, Bogotá D.C en Colombia y Villahermosa en México. Prestamos nuestros servicios preservando siempre nuestro principio y valores ecológicos, morales, ético y de responsabilidad social.</p>
                </div>
            </div>

            <div className="Integrantes-goals">

                <Fade left>
                    <div className="mision">
                        <span>NUESTRA MISIÓN</span>
                        <p>Promover soluciones tecnológicas y servicios especializados para ayudar a los operadores del sector energético, petróleo y gas a lograr el máximo provecho de sus activos incrementando la producción de hidrocarburos, con la mayor rentabilidad en el empleo y usos de sus recursos, valores patrimoniales humanos, ético y morales en armonía con el ambiente.</p>
                    </div>
                </Fade>


                <Fade right>
                    <div className="vision">
                        <span>NUESTRA VISIÓN</span>
                        <p>Posicionarnos como una  empresa líder en el suministro de equipos, herramientas, insumos, consumibles y servicios para el sector energético, siendo un aliado estratégico trabajando de la mano con nuestros clientes en la entrega de soluciones efectivas en las operaciones y desarrollo de sus actividades logrando la optimización de sus activos.</p>
                    </div>
                </Fade>


            </div>

            <div className="Integrantes-aboutUs">
                <div className="container">
                    <Fade bottom>
                        <h2>NUESTROS <span>VALORES</span></h2>
                    </Fade>
                    <div className='grid'>
                        <Fade right>
                            < div>
                                <img src={like} alt="" />
                                <h4>Integridad</h4>
                            </div>
                            <div>
                                <img src={security} alt="" />
                                <h4>Seguridad</h4>
                            </div>
                            <div>
                                <img src={nature} alt="" />
                                <h4>Respeto a<br /> la vida y al<br /> medio<br /> ambiente
                                </h4>
                            </div>
                            <div>
                                <img src={collaboration} alt="" />
                                <h4>Colaboración</h4>
                            </div>
                            <div>
                                <img src={mind} alt="" />
                                <h4>Creatividad</h4>
                            </div>
                            <div>
                                <img src={light} alt="" />
                                <h4>Innovación</h4>
                            </div>
                            <div>
                                <img src={compe} alt="" />
                                <h4>Competitividad</h4>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

            <div className="Integrantes-more">

                <div className="subtitles">
                    <h4 onClick={activeValue1}>POLÍTICA DE CALIDAD</h4>
                    <h4 onClick={activeValue2}>POLÍTICA DE SEGURIDAD</h4>
                    <h4 onClick={activeValue3}>POLÍTICA AMBIENTAL</h4>
                </div>
                <div className="info">
                    {parrafo1 === 'active' && <p ><b>MANU Importadora y Suplidora C.A.</b>, tiene como compromiso establecer un sistema de calidad que permita mejorar continuamente los procesos productivos y administrativos, asumiendo una actitud de cero defectos, haciendo las cosas bien desde la primera vez, reafirmando una autentica imagen de ética, seriedad, respeto y compromiso hacia nuestros clientes, proveedores, colaboradores hacia la sociedad general, mediante la captación, desarrollo y motivación del personal, para afrontar con éxito los retos actuales y futuros.
                    </p>}

                    {parrafo2 === 'active' && <p > Es política  de Construcciones e Ingeniería MANU C.A. ejecutar todas sus actividades en óptimas condiciones de Seguridad, Industrial, Ambiente  e Higiene Ocupacional (SIAHO), con la finalidad de prevenir eventos no deseados y de garantizar la salud y bienestar de nuestros trabajadores, la conservación del medio ambiente y la protección física de sus instalaciones y sus clientes.

                        Nuestra organización tiene como  norte fundamental velar por el bienestar integral de su equipo de trabajo a todo nivel. Por ello la Empresa, sus trabajadores y contratistas, darán estricto cumplimiento a las leyes, reglamentos y normas en materia de salud y seguridad,  por lo cual es política de nuestra empresa:

                        La aplicación del Plan Especifico de Seguridad Industrial, Ambiente e Higiene Ocupacional basado en las normas COVENIN 2260, así como el Programa de Higiene y Seguridad Ocupacional, normas PDVSA SI-S-04-2011 y en concordancia con todo lo establecido en la LOPCYMAT y su Reglamento y demás leyes y regulaciones nacionales e internacionales vigentes sobre la materia.
                        Instruir a los trabajadores sobre el uso adecuado de los equipos de protección personal y su obligatoriedad en su uso.
                        Dar a conocer a los trabajadores las prevenciones y recomendaciones generales que se deben tomar en cuenta para minimizar los riegos
                        Dar a conocer a los trabajadores la existencia de los riegos de tipos físicos, químicos, biológicos, ergonómicos, climáticos y psicosociales que puedan existir dentro de los procesos de trabajo así como también las medidas de prevención
                        Orientar a los trabajadores hacia el cumplimiento de normas, leyes, decretos, tales como LOPCYMAT y su Reglamento y demás leyes, como medio de prevención de accidente, mejorando la calidad y condiciones de trabajo
                        Estamos comprometidos a mantener la relación cliente- servicio, adoptando las buenas prácticas de trabajo seguro en la asistencia técnica oportuna.</p>}

                    {parrafo3 === 'active' && <p >Construcciones e Ingeniería MANU C.A. asume como compromiso y a la vez declara como política Ambiental:

                        Previa planificación y gestión de actualización continua.
                        Ejecutar todas sus actividades en excelentes condiciones de Seguridad, Higiene industrial y Protección ambiental, en función de garantizar la salud y el bienestar de sus trabajadores, la conservación del Ambiente y la protección física de sus instalaciones,
                        Cumpliendo con las leyes, decretos y reglamentos de la ley de prevención, condiciones y medio Ambiente de trabajo, las leyes Ambientales y todas aquellas normas y procedimientos que se deriven de las instituciones oficiales que rigen la materia en perfecta armonía con la consecución de los trabajos planteados.
                        Previa planificación y gestión de actualización continua.
                        Ejecutar todas sus actividades en excelentes condiciones de Seguridad, Higiene industrial y Protección ambiental, en función de garantizar la salud y el bienestar de sus trabajadores, la conservación del Ambiente y la protección física de sus instalaciones,
                        Cumpliendo con las leyes, decretos y reglamentos de la ley de prevención, condiciones y medio Ambiente de trabajo, las leyes Ambientales y todas aquellas normas y procedimientos que se deriven de las instituciones oficiales que rigen la materia en perfecta armonía con la consecución de los trabajos planteados.
                    </p>}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Integrantes