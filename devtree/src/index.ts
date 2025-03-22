import server from './server'

//Este archivo solo lo quiero para arrancar el servidor

// proccess.env.PORT dice "utiliza esa variable de entorno llamada PORT si existe". sino existe se usa el 4000
const port = process.env.PORT || 4000 // esto se define solo antes de hacer el hacer el deployment, después el hosting define el puerto
//Creamos el servidor. El puerto es el 4000
server.listen(port, () => {
    console.log('Servidor funcionando en el puerto:', port)
})























































