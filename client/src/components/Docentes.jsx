import { useQuery  } from '@apollo/client';
import DocenteRow from './DocenteRow';
import { GET_Docentes } from '../queries/docentesQueries';
import Spinner from './Spinner';
import '../css/SidebarVertical.css';

export default function Docentes() {
  const{loading,error,data} = useQuery(GET_Docentes)
 if (loading)return <Spinner/>
 if (error)return <p>Error..</p>
  return (
    <section>
    {!loading && !error && (
    <table className="table table-hover mt-3">
    <thead>
        <tr>
            <th  >Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Direccion</th>
            <th>Celular</th>
            <th>Especialidad</th>
            <th>Eliminar</th>
            <th>Ver</th>       
        </tr>
    </thead>
    <tbody>
        {data.docentes.map(  docente=>
            <DocenteRow key={  docente.id}   docente={docente}/>
            )}
    </tbody>
</table>)}
    </section>
  )
}
