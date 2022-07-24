import { useEffect, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useMutation } from "@apollo/client";
import { ADD_ESTUDIANTE } from "../mutation/estudianteMutation";
import { GET_Estudiantes } from '../queries/estudiantesQueries';
import '../css/SidebarVertical.css';


export default function AddDocenteModal() {
  const [nombre, setnombre] =  useState("");
  const [apellido, setapellido] =  useState("");
  const [nroregistro, setnroregistro] =  useState(null);
  const [direccion, setdireccion] =  useState("");
  const [celular, setcelular] =  useState(null);
  const [correo, setcorreo] =  useState("");


  const [ADD_ESTUDIANTES] = useMutation(
    ADD_ESTUDIANTE,

    {
      variables: { nombre, apellido, nroregistro,direccion,celular,correo },
      update(cache, { data: { ADD_ESTUDIANTES } }) {
        const { estudiantes } = cache.readQuery({
            query:  GET_Estudiantes,
        });

        cache.writeQuery({
          query: GET_Estudiantes,
          data: {
            estudiantes: [
              ...estudiantes,
              ADD_ESTUDIANTES,
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
      nroregistro === null ||
      direccion === "" ||
      celular === null ||
      correo === "" 


    ) {
      return alert("Por favor complete todo los campos");
    }

    ADD_ESTUDIANTES(nombre, apellido, nroregistro,direccion,celular,correo);

    setnombre("");
    setapellido("");
    setnroregistro("");
    setdireccion("");
    setcelular("");
    setcorreo("");


  };

  return (
    <section>
      <button
        type="button"
        className="btn boton"
        data-bs-toggle="modal"
        data-bs-target="#AddModalEstudiant"
      >
        <div className="d-flex align-items-center">
          <AccountCircleIcon />
          {" "}
          <div>Añadir</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="AddModalEstudiant"
        aria-labelledby="AddModalEstudiantLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="AddModalEstudiantLabel">
                Añadir Estudiante
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
                  <label className="form-label">Correo</label>
                  <input
                    className="form-control"
                    id="correo"
                    value={correo}
                    onChange={(e) => setcorreo(e.target.value)}
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