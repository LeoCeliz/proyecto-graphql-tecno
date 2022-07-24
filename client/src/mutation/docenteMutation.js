import { gql } from '@apollo/client';

const ADD_DOCENTE= gql`
  mutation addDocentes( $nombre: String!,$apellido: String!,$correo: String!,$direccion:String!,$celular:Int!,$especialidad:String!){
    addDocentes(nombre:$nombre,apellido:$apellido,correo:$correo,direccion:$direccion,celular:$celular,especialidad:$especialidad){
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


const deleteDocentes = gql`
  mutation deleteDocentes($id: ID!) {
    deleteDocentes(id: $id) {
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

const UPDATEDOCENTE = gql`
  mutation updateDocentes(
    $id: ID!,
    $nombre: String!,
    $apellido: String!,
    $correo: String!,
    $direccion:String!,
    $celular:Int!,
    $especialidad:String!

  ) {
    updateDocentes(
      id: $id,
      nombre:$nombre,
      apellido:$apellido,
      correo:$correo,
      direccion:$direccion,
      celular:$celular,
      especialidad:$especialidad

    ) {
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

export {ADD_DOCENTE,deleteDocentes,UPDATEDOCENTE};
