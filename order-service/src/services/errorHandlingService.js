// Error handler
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: "true",
        message: err.message,
        data: null
    });
    logger.error(`${err.name}: ${err.message}`);
    logger.debug("trace", err.stack);
}

module.exports = {
    errorHandler: errorHandler
}