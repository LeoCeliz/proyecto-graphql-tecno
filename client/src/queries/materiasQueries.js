import { gql } from "@apollo/client";

const GET_Materias = gql`
  query materias {
    materias {
        id
        sigla
        grupo
        nombre
        prerequisito
    }
  }
`;
const GETMateria = gql`
  query materia( $id: ID!){
    materia(id: $id){
        id
        sigla
        grupo
        nombre
        prerequisito
    }
  }

`;
export { GET_Materias,GETMateria };
