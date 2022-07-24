const mongoose = require("mongoose");

const MateriaShema = new mongoose.Schema({
    sigla: {type:String},
    grupo:{type:String },
    nombre:{type: String},
    prerequisito: {type:String},
   

});

module.exports = mongoose.model("Materia", MateriaShema);