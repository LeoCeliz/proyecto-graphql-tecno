import { useQuery } from '@apollo/client';
import MateriaRow from './MateriaRow';
import { GET_Materias } from '../queries/materiasQueries';
import Spinner from './Spinner';


export default function Materias() {
  const{loading,error,data} = useQuery(GET_Materias)
 if (loading)return <Spinner/>
 if (error)return <p>Error..</p>
  return (
    <section>
    {!loading && !error && (
    <table className="table table-hover mt-3">
    <thead>
        <tr>
            <th>Sigla</th>
            <th>Grupo</th>
            <th>Nombre</th>
            <th>Prerequisito</th>
            <th>Eliminar</th>
            <th>Ver</th>       
        </tr>
    </thead>
    <tbody>
        {data.materias.map(  materia=>
            <MateriaRow key={materia.id}   materia={materia}/>
            )}
    </tbody>
</table>)}
    </section>
  )
}
