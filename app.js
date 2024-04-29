//Levantamos el servidor con la lib Express
const express = require('express');
const dbconnect = require('./config'); 
const routes = require('./routes/index.routes')
const app = express();

app.use(express.json())
app.use(routes)
app.listen(3000, () => {
    console.log("El servidor esta escuchando en el puerto 3000")
})


dbconnect();