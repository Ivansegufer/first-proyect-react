import React, { useState, useEffect } from 'react'; 
import Axios from 'axios'; 

const Course = ({match}) => {

    const [state, setState] = useState({}); 

    useEffect(() => {
        console.log('Hola perro'); 
        Axios.get(`https://my-json-server.typicode.com/Ivansegufer/json-db/cursos/${match.params.id}`)
        .then(response => setState(response.data)); 
    }, []); 
    return (
        <>
        {
            state ? (
                <section className="main-banner background grey-800 l-section s-py-4">
                    <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
                        <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left">
                            <h1>{state.titulo}</h1>
                            <p>Pequeña descripcion de lo que es el curso.</p>
                            <div className="s-main-center">
                                <a className="button blue-500 s-mr-2 s-mb-2 m-mb-0" href="https://ed.team" target="blank">Comprar curso</a>
                                <a className="button ghost blue-400 s-mb-2 m-mb-0" href="https://ed.team" target="blank">Vista previa</a>
                            </div>
                        </div>
                        <div className="img-container s-ratio-16-9">
                            <img className="s-radius-1" src={state.image} alt={state.titulo}/>
                        </div>
                    </div>
                </section> ) : (
                <div className="ed-grid">
                    <h1>Error 404</h1>
                    <span>Página no encontrada</span>
                </div> ) 
        }
        </>
    )
}

export default Course;