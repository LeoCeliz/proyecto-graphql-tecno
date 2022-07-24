import { gql } from "@apollo/client";

const GET_Docentes = gql`
  query docentes {
    docentes {
        id
        nombre
        apellido
        correo
        direccion
        celular
        especialidad
    }
  }
`;
const GETDocente = gql`
  query docente( $id: ID!){
    docente(id: $id){
        id
        nombre
        apellido
        correo
        direccion
        celular
        especialidad
    }
  }

`;
export { GET_Docentes, GETDocente};