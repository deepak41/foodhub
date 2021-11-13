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