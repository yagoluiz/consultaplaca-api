'use strict'

const ValidationContract = require('../validators/fluent-validator');
const sinespService = require('../services/sinesp-service');

exports.get = async (req, res, next) => {
    try {
        const numero = req.params.numero;

        let contract = new ValidationContract();
        contract.isRequired(numero, 'Número da placa é obrigatório');
        contract.isPlaca(numero, 'Formato do número da placa inválido');

        if (!contract.isValid()) {
            res.status(400).send(contract.errors()).end();
            return;
        }

        const service = await sinespService.consultaPlaca(numero);

        if (service.codigoRetorno != 0) {
            res.status(400).send(service).end();
            return;
        }

        res.status(200).send(service);
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};