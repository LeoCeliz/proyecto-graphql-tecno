import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GETDocente } from '../queries/docentesQueries'; 
import React from 'react'
import EditarDocentes from '../components/EditarDocentes';



export default function Docentepage() {
  const {id}=useParams();
  const {loading,error,data} = useQuery(GETDocente,{variables:{id}});
  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;
  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-4'>
          <Link to='/docentes' className='btn btn-success btn-sm w-25 d-inline ms-auto'>
            Atras
          </Link>
          <h5 className='mt-5'>Información de los docentes</h5>
        <ul className='list-group'>
            <li className='list-group-item'>
                <p>Nombre :</p>  {data.docente.nombre}
            </li>
            <li className='list-group-item'>
                <p>Apellido :</p>  {data.docente.apellido}
            </li>
            <li className='list-group-item'>
                <p>Correo :</p> {data.docente.correo}
            </li>
            <li className='list-group-item'>
                <p>Direccion :</p>  {data.docente.direccion}
            </li>
            <li className='list-group-item'>
                <p>Celular :</p>  {data.docente.celular}
            </li>
            <li className='list-group-item'>
                <p>Especialidad :</p>  {data.docente.especialidad}
            </li>
            <EditarDocentes docente={data.docente}/>
        </ul>
      
        </div>
    )}
    </>
  );
}