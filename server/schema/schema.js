//const{personas,mascotas,servicios}=require('../sampleData.js');
const {GraphQLNonNull, GraphQLObjectType,GraphQLSchema,GraphQLList,GraphQLID,GraphQLString, GraphQLInt, GraphQLFloat } = require('graphql');
//mongoose modelos
const Docente = require("../models/Docente");
const Estudiante = require("../models/Estudiante");
const Materia = require("../models/Materia");

const DocenteType = new GraphQLObjectType({
    name: "Docente",
    fields: () => ({
      id: { type: GraphQLID },
      nombre: { type: GraphQLString },
      apellido: { type: GraphQLString },
      correo: { type: GraphQLString },
      direccion:{type:GraphQLString},
      celular:{type:GraphQLInt},
      especialidad:{type:GraphQLString},
      
    }),
  });

  
const EstudianteType = new GraphQLObjectType({
  name: "Estudiante",
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    apellido: { type: GraphQLString },
    nroregistro: { type: GraphQLInt },
    direccion: { type: GraphQLString },
    celular: { type: GraphQLInt },
    correo: { type: GraphQLString },

  }),
});
  
  const MateriaType = new GraphQLObjectType({
    name: "Materia",
    fields: () => ({
      id: { type: GraphQLID },
      sigla: { type: GraphQLString },
      grupo: { type: GraphQLString },
      nombre: { type: GraphQLString },
      prerequisito: { type: GraphQLString },

    }),
  });

   

  const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      docentes: {
        type: new GraphQLList(DocenteType),
        resolve(parent, args) {
          return Docente.find();
        },
      },
      estudiantes: {
        type: new GraphQLList(EstudianteType),
        resolve(parent, args) {
          return Estudiante.find();
        },
      },
      materias: {
        type: new GraphQLList(MateriaType),
        resolve(parent, args) {
          return Materia.find();
        },
      },
      docente: {
        type: DocenteType, 
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Docente.findById(args.id);
        },
      },
      
    estudiante: {
      type: EstudianteType, 
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Estudiante.findById(args.id);
      },
    },
    materia: {
      type: MateriaType, 
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Materia.findById(args.id);
      },
    },

    }
  });
//Mutations
//add docentes
const mutation = new GraphQLObjectType({
  name: "addDocente",
  fields: {
    addDocentes: {
      type: DocenteType,
      args: {
        nombre: { type: GraphQLNonNull(GraphQLString)},
        apellido: { type: GraphQLNonNull(GraphQLString) },
        correo: { type: GraphQLNonNull(GraphQLString) },
        direccion: { type: GraphQLNonNull(GraphQLString) },
        celular: { type: GraphQLNonNull(GraphQLInt) },
        especialidad: { type: GraphQLNonNull(GraphQLString) },

      },
      resolve(parent, args) {
        console.log("mutation", args);
        const docente = new Docente({
          nombre: args.nombre,
          apellido: args.apellido,
          correo: args.correo,
          direccion: args.direccion,
          celular: args.celular,
          especialidad: args.especialidad,


        });
        return docente.save();
      },
    },
    //delete
    deleteDocentes: {
      type: DocenteType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Docente.findByIdAndRemove(args.id);
      },
    },
    //update
    updateDocentes: {
      type: DocenteType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        nombre: { type: GraphQLString},
        apellido: { type: GraphQLString },
        correo: { type:GraphQLString },
        direccion: { type: GraphQLString },
        celular: { type: GraphQLInt },
        especialidad: { type: GraphQLString },

      },
      resolve(parent, args) {
        return Docente.findByIdAndUpdate(
          args.id,
          {
            $set: {
              nombre: args.nombre,
              apellido: args.apellido,
              correo: args.correo,
              direccion: args.direccion,
              celular: args.celular,
              especialidad: args.especialidad,
            },
          },
          { new: true }
        );
      },
    },
  


  //estudiantes mutation
    addEstudiantes: {
      type: EstudianteType,
      args: {
        nombre: { type: GraphQLNonNull(GraphQLString)},
        apellido: { type: GraphQLNonNull(GraphQLString) },
        nroregistro: { type: GraphQLNonNull(GraphQLInt) },
        direccion: { type: GraphQLNonNull(GraphQLString) },
        celular: { type: GraphQLNonNull(GraphQLInt) },
        correo: { type: GraphQLNonNull(GraphQLString) },

        

      },
      resolve(parent, args) {
        console.log("mutation", args);
        const estudiante = new Estudiante({
          nombre: args.nombre,
          apellido: args.apellido,
          nroregistro: args.nroregistro,
          direccion: args.direccion,
          celular: args.celular,
          correo: args.correo,
       
        });
        return estudiante.save();
      },
    },
    //delete
    deleteEstudiantes: {
      type: EstudianteType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Estudiante.findByIdAndRemove(args.id);
      },
    },
    //update
    updateEstudiantes: {
      type: EstudianteType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        nombre: { type: GraphQLString},
        apellido: { type: GraphQLString },
        nroregistro: { type: GraphQLInt },
        direccion: { type: GraphQLString },
        celular: { type: GraphQLInt },
        correo: { type: GraphQLString},
       

      },
      resolve(parent, args) {
        return Estudiante.findByIdAndUpdate(
          args.id,
          {
            $set: {
              nombre: args.nombre,
              apellido: args.apellido,
              nroregistro: args.nroregistro,
              direccion: args.direccion,
              celular: args.celular,
              correo: args.correo,
            },
          },
          { new: true }
        );
      },
    },
  


 //add materia
    addMaterias: {
      type: MateriaType,
      args: {
        sigla: { type: GraphQLNonNull(GraphQLString)},
        grupo: { type: GraphQLNonNull(GraphQLString) },
        nombre: { type: GraphQLNonNull(GraphQLString) },
        prerequisito: { type: GraphQLString },
        

      },
      resolve(parent, args) {
        console.log("mutation", args);
        const materia = new Materia({
          sigla: args.sigla,
          grupo: args.grupo,
          nombre: args.nombre,
          prerequisito: args.prerequisito,
          

        });
        return materia.save();
      },
    },
    //delete
    deleteMaterias: {
      type: MateriaType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Materia.findByIdAndRemove(args.id);
      },
    },
    //update
    updateMaterias: {
      type: MateriaType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        sigla: { type: GraphQLString },
        grupo: { type: GraphQLString },
        nombre: { type: GraphQLString },
        prerequisito: { type: GraphQLString },
       

      },
      resolve(parent, args) {
        return Materia.findByIdAndUpdate(
          args.id,
          {
            $set: {
              sigla: args.sigla,
              grupo: args.grupo,
              nombre: args.nombre,
              prerequisito: args.prerequisito,
            },
          },
          { new: true }
        );
      },
    },
  },
});



  module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
  });