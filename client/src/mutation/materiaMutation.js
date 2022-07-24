import { gql } from '@apollo/client';

const ADD_MATERIA= gql`
  mutation addMaterias( $sigla: String!,$grupo: String!,$nombre: String!,$prerequisito:String!){
    addMaterias(sigla:$sigla,grupo:$grupo,nombre:$nombre,prerequisito:$prerequisito){
        id
        sigla
        grupo
        nombre
        prerequisito
    }
  }
`;
const deleteMaterias = gql`
  mutation deleteMaterias($id: ID!) {
    deleteMaterias(id: $id) {
        id
        sigla
        grupo
        nombre
        prerequisito
    }
  }
`;

const UPDATEMATERIA = gql`
  mutation updateMaterias(
    $id: ID!,
    $sigla: String!,
    $grupo: String!,
    $nombre: String!,
    $prerequisito:String!,
    

  ) {
    updateMaterias(
      id: $id,
      sigla:$sigla,
      grupo:$grupo,
      nombre:$nombre,
      prerequisito:$prerequisito,

    ) {
      id
      sigla
      grupo
      nombre
      prerequisito
      
      }
    }
`;
export {deleteMaterias,ADD_MATERIA,UPDATEMATERIA};
