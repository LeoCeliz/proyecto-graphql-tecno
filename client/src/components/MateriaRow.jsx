import {FaTrash,FaRegEye} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { deleteMaterias } from '../mutation/materiaMutation';
import { GET_Materias } from '../queries/materiasQueries';


export default function MateriaRow({  materia}) {
  const [deleteMateria]= useMutation(deleteMaterias,{
    variables: { id: materia.id },
    refetchQueries: [{ query: GET_Materias }],
  });
  return (
    <tr>
        
            <td>{materia.sigla}</td>
            <td>{materia.grupo}</td>
            <td>{materia.nombre}</td>
            <td>{materia.prerequisito}</td>
            


            <td>
               
                <button className="btn btn-danger btn-sm" onClick={deleteMateria}>
                  <FaTrash />
                </button>
            </td>

            <td>
              <a className="btn btn-info btn-sm" href={`/infomaterias/${materia.id}`}>
              <FaRegEye />
              </a>

            </td>
        
    </tr>
  );
}