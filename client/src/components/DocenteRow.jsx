import {FaTrash,FaRegEye} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { deleteDocentes } from '../mutation/docenteMutation';
import { GET_Docentes } from '../queries/docentesQueries';


export default function DocenteRow({docente}) {
  const [deleteDocente]= useMutation(deleteDocentes,{
    variables: { id: docente.id },
    refetchQueries: [{ query: GET_Docentes }],
  });
  return (
    <tr>
        
            <td>{docente.nombre}</td>
            <td>{docente.apellido}</td>
            <td>{docente.correo}</td>
            <td>{docente.direccion}</td>
            <td>{docente.celular}</td>
            <td>{docente.especialidad}</td>


            <td>
               
                <button className="btn btn-danger btn-sm" onClick={deleteDocente}>
                  <FaTrash />
                </button>
            </td>

            <td>
              <a className="btn btn-info btn-sm" href={`/infoDocentes/${docente.id}`}>
              <FaRegEye />
              </a>

            </td>
        
    </tr>
  );
}