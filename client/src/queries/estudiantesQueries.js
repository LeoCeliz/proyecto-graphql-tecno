import { gql } from "@apollo/client";

const GET_Estudiantes = gql`
  query estudiantes {
    estudiantes {
        id
        nombre
        apellido
        nroregistro
        direccion
        celular
        correo
    }
  }
`;
const GETEstudiante = gql`
  query estudiante( $id: ID!){
    estudiante(id: $id){
        id
        nombre
        apellido
        nroregistro
        direccion
        celular
        correo
    }
  }

`;
export { GET_Estudiantes,GETEstudiante };