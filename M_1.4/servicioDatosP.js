let finDeTransmisionDeDatos = function (id) {
    console.log('Transferencia', id, 'terminada');
}

let obtenerDatosDeInternet = function (id, duración) {
    console.log('Proceso', id, 'obteniendo datos de Internet');
    return new Promise(resolve => {
        setTimeout(() => {
            finDeTransmisionDeDatos(id);
            resolve();
        }, duración);
    });
}

module.exports.getDatos = obtenerDatosDeInternet;