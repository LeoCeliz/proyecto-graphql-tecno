import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GETDocente } from '../queries/docentesQueries';
import { UPDATEDOCENTE } from '../mutation/docenteMutation';

export default function EditarDocentes({docente}) {
    
    const [nombre, setnombre] =  useState(docente.nombre);
    const [apellido, setapellido] =  useState(docente.apellido);
    const [correo, setcorreo] =  useState(docente.correo);
    const [direccion, setdireccion] =  useState(docente.direccion);
    const [celular, setcelular] =  useState(docente.celular);
    const [especialidad, setespecialidad] =  useState(docente.especialidad);

  
    const [UPDATEDOCENTES]=useMutation(UPDATEDOCENTE,{
        variables: {id: docente.id,nombre,apellido,correo,direccion,celular,especialidad},
        refetchQueries:[{query:GETDocente,variables:{id:docente.id}}]
    });

    const onSubmit=(e)=>{
        e.preventDefault();

        if(!nombre || !apellido || !correo || !direccion|| !celular || !especialidad ){
            return alert('Por favor complete los campos');
        }
        UPDATEDOCENTES(nombre,apellido,correo,direccion,celular,especialidad);
    };

  return (
    <div className='mt-5'>
        <h3>Modificar Docentes</h3>
        <form onSubmit={onSubmit}>
        
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setnombre(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Apellido</label>
                  <input
                    className="form-control"
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setapellido(e.target.value)}
                  >  
                  </input>
                </div>
                <div className="mb-3">
                  <label className="form-label">correo</label>
                  <input
                    
                    className="form-control"
                    id="correo"
                    value={correo}
                    onChange={(e) => setcorreo(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Direccion</label>
                  <input
                    className="form-control"
                    id="direccion"
                    value={direccion}
                    onChange={(e) => setdireccion(e.target.value)}
                  >  
                  </input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Celular</label>
                  <input
                    type="number"
                    className="form-control"
                    id="celular"
                    value={celular}
                    onChange = { (e) => {
                      const value = e.target.value;
                      console.log(value);
                      setcelular(()=>value === '' ? null : Number(value))
                    }}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Especialidad</label>
                  <input
                    className="form-control"
                    id="especialidad"
                    value={especialidad}
                    onChange={(e) => setespecialidad(e.target.value)}
                  >  
                  </input>
                </div>
                <button type='submit' className="btn btn-primary">
                    Modificar
                </button>
        </form>
    </div>
  )
}
