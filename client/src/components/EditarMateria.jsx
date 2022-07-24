import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GETMateria } from '../queries/materiasQueries';
import { UPDATEMATERIA } from '../mutation/materiaMutation';

export default function EditarMateria({materia}) {
    
    const [sigla, setsigla] =  useState(materia.sigla);
    const [grupo, setgrupo] =  useState(materia.grupo);
    const [nombre, setnombre] =  useState(materia.nombre);
    const [prerequisito, setprerequisito] =  useState(materia.prerequisito);
   

  
    const [UPDATEMATERIAS]=useMutation(UPDATEMATERIA,{
        variables: {id: materia.id,sigla,grupo,nombre,prerequisito},
        refetchQueries:[{query:GETMateria,variables:{id:materia.id}}]
    });

    const onSubmit=(e)=>{
        e.preventDefault();

        if(!sigla || !grupo || !nombre  ){
            return alert('Por favor complete los campos');
        }
        UPDATEMATERIAS(sigla,grupo,nombre,prerequisito);
    };

  return (
    <div className='mt-5'>
        <h3>Modificar Materias</h3>
        <form onSubmit={onSubmit}>
        
                <div className="mb-3">
                  <label className="form-label">Sigla</label>
                  <input
                    
                    className="form-control"
                    id="sigla"
                    value={sigla}
                    onChange={(e) => setsigla(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Grupo</label>
                  <input
                    className="form-control"
                    id="grupo"
                    value={grupo}
                    onChange={(e) => setgrupo(e.target.value)}
                  >  
                  </input>
                </div>
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
                  <label className="form-label">Prerequisito</label>
                  <input
                    className="form-control"
                    id="prerequisito"
                    value={prerequisito}
                    onChange={(e) => setprerequisito(e.target.value)}
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
