'use-strict'

const sinesp = require('sinesp-nodejs');

exports.consultaPlaca = async (numero) => {
    return await sinesp.consultaPlaca(numero);
}