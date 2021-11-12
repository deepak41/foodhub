const { mongoConnect } = require('./services/mongoService');
const { amqpConnectAndConsume} = require('./services/mqService');

startServer = () => {
    // Connect to MongoDB
    mongoConnect();
    // Connect to RabbmitMQ and consume orders
    amqpConnectAndConsume();
}

module.exports = {
    startServer: startServer
}
