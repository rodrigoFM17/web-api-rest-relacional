const express = require('express')
const usuariosRouter = require('./src/routes/usuarios.route')

const app = express()

app.use(express.json())
app.use('/usuarios', usuariosRouter)

const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log('API escuchando en el puerto ' + PORT)
})