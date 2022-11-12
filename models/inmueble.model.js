const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const inmuSchema= new Schema ({
    piso: Number,
    letra: String,
    extension: Number,
    numhab: Number,
    alquilado: Boolean,
    nombre: String,
    mail: String
});
module.exports= mongoose.model('inmueble',inmuSchema);