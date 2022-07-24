import { gql } from '@apollo/client';

const ADD_ESTUDIANTE= gql`
  mutation addEstudiantes( $nombre: String!,$apellido: String!,$nroregistro: Int!,$direccion:String!,$celular:Int!,$correo:String!){
    addEstudiantes(nombre:$nombre,apellido:$apellido,nroregistro:$nroregistro,direccion:$direccion,celular:$celular,correo:$correo){
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


const deleteEstudiantes = gql`
  mutation deleteEstudiantes($id: ID!) {
    deleteEstudiantes(id: $id) {
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

const UPDATEESTUDIANTE = gql`
  mutation updateEstudiantes(
    $id: ID!,
    $nombre: String!,
    $apellido: String!,
    $nroregistro: Int!,
    $direccion: String!,
    $celular: Int!,
    $correo: String!

  ) {
    updateEstudiantes(
      id: $id,
      nombre:$nombre,
      apellido:$apellido,
      nroregistro:$nroregistro,
      direccion:$direccion,
      celular:$celular,
      correo:$correo

    ) {
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

export {deleteEstudiantes,ADD_ESTUDIANTE,UPDATEESTUDIANTE};
