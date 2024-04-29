const mongoose = require ('mongoose');
const dbconnect = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect("mongodb://localhost:27017/dbProgramacionTp",{},(err,res) => {
        if(!err) {
            console.log("¡Conexion exitosa!")
        }
        else{
            console.log("Error en la conexion")
        }
    })
}

module.exports = dbconnect;