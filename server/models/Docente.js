const mongoose = require("mongoose");

const DocenteShema = new mongoose.Schema({
    nombre: {type:String},
    apellido:{type: String},
    correo: {type:String},
    direccion:{type:String},
    celular:{type:Number },
    especialidad:{type:String}
});

module.exports = mongoose.model("Docente", DocenteShema);