const notFoundError = (_, _res, next) => {
    const error = new Error();
    error.status = 404;
    next(error);
};

const internalServerError = (error, _, res, next) => {
    if (error.status === 404) {
        res.status(404).send();
    } else {
        res.status(500).send({
            error: error.name,
            message: error.message,
            stack: error.stack
        });
    }
    next(error);
};

module.exports = {
    notFoundError,
    internalServerError
};
