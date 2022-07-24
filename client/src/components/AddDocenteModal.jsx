import { useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import { useMutation } from "@apollo/client";
import { ADD_DOCENTE } from "../mutation/docenteMutation";
import { GET_Docentes } from '../queries/docentesQueries';
import '../css/SidebarVertical.css';


export default function AddDocenteModal() {
  const [nombre, setnombre] =  useState("");
  const [apellido, setapellido] =  useState("");
  const [correo, setcorreo] =  useState("");
  const [direccion, setdireccion] =  useState("");
  const [celular, setcelular] =  useState(null);
  const [especialidad, setespecialidad] =  useState("");


  const [ADD_DOCENTES] = useMutation(
    ADD_DOCENTE,

    {
      variables: { nombre, apellido, correo,direccion,celular,especialidad },
      update(cache, { data: { ADD_DOCENTES } }) {
        const { docentes } = cache.readQuery({
            query:  GET_Docentes,
        });

        cache.writeQuery({
          query: GET_Docentes,
          data: {
            docentes: [
              ...docentes,
              ADD_DOCENTES,
            ],
          },
        });
      },
    }
  );
 useEffect(() => {
  
 console.log(nombre);
   
 })
 
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      apellido === "" ||
      correo === "" ||
      direccion === "" ||
      celular === null ||
      especialidad === "" 


    ) {
      return alert("Por favor complete todo los campos");
    }

    ADD_DOCENTES(nombre, apellido, correo,direccion,celular,especialidad);

    setnombre("");
    setapellido("");
    setcorreo("");
    setdireccion("");
    setcelular("");
    setespecialidad("");


  };

  return (
    <section>
      <button
        type="button"
        className="btn boton"
        data-bs-toggle="modal"
        data-bs-target="#AddDocentemodal"
      >
        <div className="d-flex align-items-center">
          <PersonIcon  />
          {" "}
          <div>Añadir</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="AddDocentemodal"
        aria-labelledby="AddDocentemodalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="AddDocentemodalLabel">
                Añadir Docente
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
                  <label className="form-label">Correo</label>
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