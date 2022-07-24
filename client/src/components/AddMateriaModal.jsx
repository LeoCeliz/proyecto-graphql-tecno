import { useEffect, useState } from "react";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useMutation } from "@apollo/client";
import { ADD_MATERIA } from "../mutation/materiaMutation";
import { GET_Materias } from '../queries/materiasQueries';
import '../css/SidebarVertical.css';


export default function AddMateriaModal() {
  const [sigla, setsigla] =  useState("");
  const [grupo, setgrupo] =  useState("");
  const [nombre, setnombre] =  useState("");
  const [prerequisito, setprerequisito] =  useState("");
  


  const [ADD_MATERIAS] = useMutation(
    ADD_MATERIA,

    {
      variables: { sigla, grupo, nombre,prerequisito},
      update(cache, { data: { ADD_MATERIAS } }) {
        const { materias } = cache.readQuery({
            query:  GET_Materias,
        });

        cache.writeQuery({
          query: GET_Materias,
          data: {
            materias: [
              ...materias,
              ADD_MATERIAS,
            ],
          },
        });
      },
    }
  );
 useEffect(() => {
  
 console.log(sigla);
   
 })
 
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      sigla === "" ||
      grupo === "" ||
      nombre === "" 
    

    ) {
      return alert("Por favor complete todo los campos");
    }

    ADD_MATERIAS(sigla, grupo, nombre,prerequisito);

    setsigla("");
    setgrupo("");
    setnombre("");
    setprerequisito("");
    


  };

  return (
    <section>
      <button
        type="button"
        className="btn boton"
        data-bs-toggle="modal"
        data-bs-target="#AddModal"
      >
        <div className="d-flex align-items-center">
          <AutoStoriesIcon />
          {"  "}
          <div>Añadir</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="AddModal"
        aria-labelledby="AddModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="AddModalLabel">
                Añadir Materia
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
                
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-success"
                >
                  Guardar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}