import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GETMateria } from '../queries/materiasQueries'; 
import React from 'react'
import EditarMateria from '../components/EditarMateria';
//import EditarPersonas from '../components/EditarPersonas';


export default function Materiapage() {
  const {id}=useParams();
  const {loading,error,data} = useQuery(GETMateria,{variables:{id}});
  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;
  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-4'>
          <Link to='/materias' className='btn btn-success btn-sm w-25 d-inline ms-auto'>
            Atras
          </Link>
          <h5 className='mt-5'>Información de las materias</h5>
        <ul className='list-group'>
            <li className='list-group-item'>
                <p>Sigla :</p>  {data.materia.sigla}
            </li>
            <li className='list-group-item'>
                <p>Grupo :</p>  {data.materia.grupo}
            </li>
            <li className='list-group-item'>
                <p>Nombre :</p> {data.materia.nombre}
            </li>
            <li className='list-group-item'>
                <p>Prerequisito :</p>  {data.materia.prerequisito}
            </li>
            <EditarMateria materia={data.materia}/>
           
        </ul>
      
        </div>
    )}
    </>
  );
}