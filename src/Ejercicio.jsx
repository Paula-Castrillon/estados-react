import React from "react"
import { useState } from "react"
import './App.css'


function Ejercicio(){

    const [curso, setCurso ] = useState ('Curso de React');
    const [software, setSoftware ] = useState ('Visual studio code');
    const [descripcion, setDescripcion ] = useState ('Curso de React con Hooks');
    const [imagen, setImagen ] = useState ('../public/Imagenes/car.jpg');

    const cambioCursor = (e)=> {
        e.preventDefault();
        const valueInput = e.target.previousSibling.value;
        setCurso(valueInput)

        e.target.previousSibling.value='';
    }
    const cambioSoftware = (e)=> {
        e.preventDefault(); 
        const valueInput = e.target.previousSibling.value;
        setSoftware(valueInput)

        e.target.previousSibling.value='';
    }
    const cambioDescripcion = (e)=> {
        e.preventDefault(); 
        const valueInput = e.target.previousSibling.value;
        setDescripcion(valueInput)

        e.target.previousSibling.value='';
    }
    const cambioImagen = (e) => {
        setImagen(e.target.src);
        console.log(e.target.src)
    }

    return(
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-12 col-lg-6 d-flex justify-content-start align-items-center text-white" style={{background: `url(${imagen}) center/cover` }}>
                    <div className="ms-5 ">
                        <h1>{curso}</h1>
                        <h3>{software}</h3>
                        <p>{descripcion}</p>
                        <button>¡Inscribete!</button>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center formulario mt-3" >
                    <div>
                    <form id="inicio-sesion">
                        <input className="form-control pad my-2 texto" type="text" name="nombre" placeholder="Nombre del curso"/>
                        <button onClick={cambioCursor}>Actualizar</button>
                        <input className="form-control pad my-2 texto" type="text" name="nombresoftware" placeholder="Software"/>
                        <button onClick={cambioSoftware}>Actualizar</button>
                        <textarea className="form-control pad my-2 texto" name="Descripcion" id="" cols="30" rows="2" placeholder="Descripción"></textarea>
                        <button onClick={cambioDescripcion}>Actualizar</button>
                    </form>
                    <div className="my-4">
                        <h3>Nueva imagen</h3>
                        <div>
                            <img onClick={cambioImagen} src="../public/Imagenes/K6Rz.gif" className="mx-1" width="60" height="40" alt="" />
                            <img onClick={cambioImagen} src="../public/Imagenes/film.jpg" className="mx-1" width="60" height="40" alt="" />
                            <img onClick={cambioImagen} src="../public/Imagenes/car.jpg" className="mx-1" width="60" height="40" alt="" />
                            <img onClick={cambioImagen} src="../public/Imagenes/3d.jpg" className="mx-1" width="60" height="40" alt="" />
                        </div>
                    </div>
                </div>

                </div>
            </div>            
        </div>
    )
}

export default Ejercicio