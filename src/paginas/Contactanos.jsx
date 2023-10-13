import React from 'react'
import Footer from '../components/Footer';
import "./Contactanos.css";
import Fade from 'react-reveal/Fade';
import { useForm } from "react-hook-form";
import Map from '../components/Map';

const Contactanos = () => {

    const { register, handleSubmit,
        formState: { errors }
    } = useForm()

    // Formulario ------
    const scriptURL = 'https://script.google.com/macros/s/AKfycbygD5pBswBOHEbjZGnZ4mzST6-C_IY2k7glWLKXDEi_0ITWIUE-CUbwnOsC-fgxFssi/exec'
    const form = document.forms['submit-to-google-sheet']


    return (
        <div className='Contacto'>
            <div className="Contacto-title">
                <Fade bottom>
                    <h1>CONTACTO</h1>
                </Fade>
            </div>
            <div className="Contacto-Formulario">

                <div className="form-container">
                    <form name="submit-to-google-sheet" onSubmit={handleSubmit((e) => {

                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                            .then(response => console.log('Success!', response))
                            .catch(error => console.error('Error!', error.message))
                    })}>

                        <input type="text" placeholder='Nombre y Apellido'  {...register("nombre", {
                            required: {
                                value: true,
                                message: "Nombre es requerido"
                            },
                            minLength: {
                                value: 5,
                                message: "Nombre debe tener al menos 5 caracteres"
                            },
                            maxLength: {
                                value: 20,
                                message: "Nombre no debe tener mas de 20 caracteres"
                            }
                        })} />

                        <div className="Errors">
                            {errors.nombre && <span className="span-errors">{errors.nombre.message}</span>}
                        </div>

                        <input type="email" placeholder='Correo Electronico' {...register("correo", {
                            required: {
                                value: true,
                                message: "Correo es requerido",
                            },
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/,
                                message: "Correo no valido"
                            }
                        })} />

                        <div className="Errors">
                            {errors.correo && <span className="span-errors">{errors.correo.message}</span>}
                        </div>

                        <input type="text" placeholder='Asunto' {...register("asunto", {
                            required: {
                                value: true,
                                message: "Asunto es requerido"
                            }
                        })} />

                        <div className="Errors">
                            {errors.asunto && <span className="span-errors">{errors.asunto.message}</span>}
                        </div>

                        <input {...register("Mensaje")} type="text" placeholder='Mensaje' className="message" />

                        <div className="button">
                            <button>Enviar</button>
                        </div>
                    </form>
                </div>

            </div>
            <div className="Contacto-subtitle">
                <Fade bottom>
                    <h2>NUESTRAS PRINCIPALES OFICINAS</h2>
                </Fade>
            </div>
            <div className="Contacto-email">
                <div className="email">
                    <Fade bottom>
                        <a>info@manugrupo.com</a>
                    </Fade>
                </div>
            </div>


            <Map />

            <Footer />
        </div>
    )
}

export default Contactanos