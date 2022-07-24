import {FaTrash,FaRegEye} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { deleteEstudiantes } from '../mutation/estudianteMutation';
import { GET_Estudiantes } from '../queries/estudiantesQueries';


export default function EstudianteRow({ estudiante}) {
  const [deleteEstudiante]= useMutation(deleteEstudiantes,{
    variables: { id: estudiante.id },
    refetchQueries: [{ query: GET_Estudiantes }],
  });
  return (
    <tr>
        
            <td>{estudiante.nombre}</td>
            <td>{estudiante.apellido}</td>
            <td>{estudiante.nroregistro}</td>
            <td>{estudiante.direccion}</td>
            <td>{estudiante.celular}</td>
            <td>{estudiante.correo}</td>
            


            <td>
               
                <button className="btn btn-danger btn-sm" onClick={deleteEstudiante}>
                  <FaTrash />
                </button>
            </td>

            <td>
              <a className="btn btn-info btn-sm" href={`/infoestudiantes/${estudiante.id}`}>
              <FaRegEye />
              </a>

            </td>
        
    </tr>
  );
}