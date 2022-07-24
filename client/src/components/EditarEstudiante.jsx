import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_Estudiantes } from '../queries/estudiantesQueries';
import { UPDATEESTUDIANTE } from '../mutation/estudianteMutation';

export default function EditarEstudiante({estudiante}) {
    
    const [nombre, setnombre] =  useState(estudiante.nombre);
    const [apellido, setapellido] =  useState(estudiante.apellido);
    const [nroregistro, setnroregistro] =  useState(estudiante.nroregistro);
    const [direccion, setdireccion] =  useState(estudiante.direccion);
    const [celular, setcelular] =  useState(estudiante.celular);
    const [correo, setcorreo] =  useState(estudiante.correo);

  
    const [UPDATEESTUDIANTES]=useMutation(UPDATEESTUDIANTE,{
        variables: {id: estudiante.id,nombre,apellido,nroregistro,direccion,celular,correo},
        refetchQueries:[{query:GET_Estudiantes,variables:{id:estudiante.id}}]
    });

    const onSubmit=(e)=>{
        e.preventDefault();

        if(!nombre || !apellido || !nroregistro || !direccion|| !celular || !correo ){
            return alert('Por favor complete los campos');
        }
        UPDATEESTUDIANTES(nombre,apellido,nroregistro,direccion,celular,correo);
    };

  return (
    <div className='mt-5'>
        <h3>Modificar Estudiantes</h3>
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
                  <label className="form-label">Nro Registro</label>
                  <input
                    
                    className="form-control"
                    id="nroregistro"
                    value={nroregistro}
                    onChange = { (e) => {
                        const value = e.target.value;
                        console.log(value);
                        setnroregistro(()=>value === '' ? null : Number(value))
                      }}
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
                  <label className="form-label">correo</label>
                  <input
                    className="form-control"
                    id="correo"
                    value={correo}
                    onChange={(e) => setcorreo(e.target.value)}
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
