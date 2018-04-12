'use strict'

exports.get = (req, res, next) => {
    const info = {
        title: "Consulta Placa API",
        version: "1.0.0"
    };
    res.status(200).send(info);
};