let finDeTransmisionDeDatos = function (id, callback) {
    console.log('Transferencia', id, 'terminada');
    callback();
}

let obtenDatosDeInternet = function (id, duración, callback) {
    console.log('Proceso', id, 'obteniendo datos de Internet');
    setTimeout(finDeTransmisionDeDatos, duración, id, callback);
}

module.exports.getDatos = obtenDatosDeInternet;