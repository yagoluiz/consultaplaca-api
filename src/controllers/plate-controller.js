const sinespService = require('../services/sinesp-service');

const get = async (req, res, next) => {
    try {
        const { plate } = req.params;

        const vehicle = await sinespService.getVehicle(plate);

        if (vehicle === undefined) {
            res.status(400).send(vehicle);
            return;
        }

        res.status(200).send(vehicle);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    get
};
