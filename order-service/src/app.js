global.express = require('express');
const { initializeRoutes } = require('./routes/api');
const { errorHandler } = require('./services/errorHandlingService');
const { mongoConnect } = require('./services/mongoService');
const { amqpConnect } = require('./services/mqService');
const PORT = process.env.PORT || nconf.get('PORT');

startServer = () => {
    // mongo connection
    mongoConnect();

    // establish mq connection
    amqpConnect();
    
    // create an express app
    const app = express();

    // middleware to parse request
    app.use(express.json());

    // cors
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        next();
    });

    // initialize all routes
    initializeRoutes(app);

    // error handling
    app.use(errorHandler)

    // Start server
    app.listen(PORT, () => {
        logger.info(`Order-Service is running at localhost:${PORT}`);
    })
}

module.exports = {
    startServer: startServer
}