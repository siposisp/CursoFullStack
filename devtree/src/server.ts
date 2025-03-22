//En este archivo va toda la configuración del servidor


//-----Importa el módulo Express----
//   sintaxis CJS
//const express = require('express')// Common JS

//   sintaxis ESM
import express from 'express'// Ecmascript modules
//-------------------------

//Para ver lo que se obtiene de Express por consola
//console.log(express)

//Creamos una aplicación de express. Es una instancia del servidor
const app = express()

//---Routing--- (son rutas en el path)
//En automatico, cuando accedes a una página web se envia una req (se envia informacion)
//como por ejemplo el navegador que se está usando, el SO, y a veces datos de formulario) 
//y se recibe un res (Se muestran productos de una página web, como productos)
app.get('/', (request, response) => {
    response.send('Hola mundo en Express / TypeScript')
})

app.get('/ecommerce', (request, response) => {
    response.send('Este es el Ecommerce')
})

app.get('/blog', (request, response) => {
    response.send('Este es el Blog')
})
//-------------

//Exportamos para importar desde el index
export default app