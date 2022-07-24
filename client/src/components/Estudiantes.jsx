import { useQuery } from '@apollo/client';
import EstudianteRow from './EstudianteRow';
import { GET_Estudiantes } from '../queries/estudiantesQueries';
import Spinner from './Spinner';


export default function Estudiantes() {
  const{loading,error,data} = useQuery(GET_Estudiantes)
 if (loading)return <Spinner/>
 if (error)return <p>Error..</p>
  return (
    <section>
    {!loading && !error &&(
    <table className="table table-hover mt-3">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Nro Registro</th>
            <th>Direccion</th>
            <th>Celular</th>
            <th>Correo</th>
            <th>Eliminar</th>
            <th>Ver</th>       
        </tr>
    </thead>
    <tbody>
        {data.estudiantes.map(  estudiante=>
            <EstudianteRow key={  estudiante.id}   estudiante={estudiante}/>
            )}
    </tbody>
</table>)}
    </section>
  )
}
