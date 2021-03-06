import express from "express";
import cors from 'cors'

//conexion  a bd
import db from "./database/db.js"
//importar enrutador
import blogRoutes from './routes/routes.js'


const app=express()
app.use(cors())
app.use(express.json())
app.use('/blogs',blogRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa a la bd')
} catch (error) {
    console.log('error de conexion: ${error}')
}


app.get('/',(req,res)=>{
    res.send('hola mundo')
})

app.listen(8000,()=>{
    console.log('servidor ejecutando en puerto 8000')

})