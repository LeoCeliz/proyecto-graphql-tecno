const mongoose = require("mongoose");

const EstudianteShema = new mongoose.Schema({
    nombre: {type:String},
    apellido:{type: String},
    nroregistro:{type: Number},
    direccion: {type:String},
    celular: {type:Number},
    correo:{type:String}

});

module.exports = mongoose.model("Estudiante", EstudianteShema);