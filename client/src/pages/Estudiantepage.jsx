import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GETEstudiante } from '../queries/estudiantesQueries'; 
import React from 'react'
import EditarEstudiante from '../components/EditarEstudiante';



export default function Estudiantepage() {
  const {id}=useParams();
  const {loading,error,data} = useQuery(GETEstudiante,{variables:{id}});
  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;
  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-4'>
          <Link to='/estudiantes' className='btn btn-success btn-sm w-25 d-inline ms-auto'>
            Atras
          </Link>
          <h5 className='mt-5'>Información de los Estudiantes</h5>
        <ul className='list-group'>
            <li className='list-group-item'>
                <p>Nombre :</p>  {data.estudiante.nombre}
            </li>
            <li className='list-group-item'>
                <p>Apellido :</p>  {data.estudiante.apellido}
            </li>
            <li className='list-group-item'>
                <p>Nro Registro :</p> {data.estudiante.nroregistro}
            </li>
            <li className='list-group-item'>
                <p>Direccion :</p>  {data.estudiante.direccion}
            </li>
            <li className='list-group-item'>
                <p>Celular :</p>  {data.estudiante.celular}
            </li>
            <li className='list-group-item'>
                <p>Correo :</p>  {data.estudiante.correo}
            </li>
            <EditarEstudiante estudiante={data.estudiante}/>
        </ul>
      
        </div>
    )}
    </>
  );
}