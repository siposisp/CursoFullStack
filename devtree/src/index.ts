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
//y se recibe un res (Se muestran productos de una p´gina web, como productos)
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

// proccess.env.PORT dice "utiliza esa variable de entorno llamada PORT si existe". sino existe se usa el 4000
const port = process.env.PORT || 4000 // esto se define solo antes de hacer el hacer el deployment, después el hosting define el puerto
//Creamos el servidor. El puerto es el 4000
app.listen(port, () => {
    console.log('Servidor funcionando en el puerto:', port)
})























































