const sinesp = require('sinesp-api');

const getVehicle = async (plate) => {
    const vehicle = await sinesp.search(plate);
    return vehicle;
};

module.exports = {
    getVehicle
};
