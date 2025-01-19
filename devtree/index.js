//Importa el módulo Express
const express = require('express') 

//Para ver lo que se obtiene de Express por consola
//console.log(express)

//Creamos una aplicación de express. Es una instancia del servidor
const app = express()

//---Routing--- (son rutas en el path)
//En automatico, cuando accedes a una página web se envia una req (se envia informacion)
//como por ejemplo el navegador que se está usando, el SO, y a veces datos de formulario) 
//y se recibe un res (Se muestran productos de una p´gina web, como productos)
app.get('/', (request, response) => {
    response.send('Hola mundo en Express')
})

app.get('/ecommerce', (request, response) => {
    response.send('Este es el Ecommerce')
})

app.get('/blog', (request, response) => {
    response.send('Este es el Blog')
})
//-------------


//Creamos el servidor. El puerto es el 4000
app.listen(4000, () => {
    console.log('Servidor funcionando...')
})























































