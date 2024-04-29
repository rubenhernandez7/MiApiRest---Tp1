const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        edad: {
            type: Number
        },
        contraseña: {
            type: String
        },
        email: {
            type: String
        },
        
    },
    {
        timestamps:true,
        versionKey: false,
    }
)

const ModelUser = mongoose.model("users", userSchema);
module.exports = ModelUser;