const amqp = require("amqplib");
// create MQ connection string using environment variable
const MQ_HOST = process.env.MQ_HOST || nconf.get('MQ_HOST');
const amqpServer = `amqp://${MQ_HOST}:5672`;
const EXCHANGE = "orders";
let orderChannel = null;


// Connect to RabbitMQ
const amqpConnect = async () => {
    try {
        const mqConnection = await amqp.connect(amqpServer);
        orderChannel = await mqConnection.createChannel();
        await orderChannel.assertExchange(EXCHANGE, 'fanout', {
            durable: false
        });
        logger.info(`RabbitMQ connection established at ${amqpServer}`);
    }
    catch(err) {
        logger.error(`RabbitMQ connection error: ${err}`);
        process.exit();
    }
}

// Publish order to queue
const publishOrderToExchange = (order) => {
    orderChannel.publish(EXCHANGE,'', Buffer.from(JSON.stringify(order)));
    logger.info(`Order ID ${order._id} placed successfully`);
}


module.exports = {
    publishOrderToExchange: publishOrderToExchange,
    amqpConnect: amqpConnect
}
