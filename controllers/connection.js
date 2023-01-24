const connectionReady = (cb = () =>{}) => {
    console.log('Listo para escuchas mensajes')
    console.log('Client is ready!');
    console.log('Escribe: Hola');
    console.log('🔴 git.andreszlp15.com🔴');
    cb()
}

const connectionLost = (cb = () =>{}) => {
    console.log('** Error de autentificacion vuelve a generar el QRCODE (Borrar el archivo session.json) **');
    cb()
}


module.exports = {connectionReady, connectionLost}
