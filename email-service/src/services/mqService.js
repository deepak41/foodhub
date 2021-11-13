const amqp = require("amqplib");
const { sendConfirmation } = require('../controllers/emailController')
const {EXCHANGE, QUEUE} = require('../resources/constants');
const PREFETCH_COUNT = parseInt(process.env.PREFETCH_COUNT) || nconf.get('PREFETCH_COUNT');
const MQ_HOST = process.env.MQ_HOST || nconf.get('MQ_HOST');
const amqpServer = `amqp://${MQ_HOST}:5672`;
let orderChannel = null;

// Connect to RabbitMQ and consumer orders
const amqpConnectAndConsume = async () => {
    try {
        const mqConnection = await amqp.connect(amqpServer);
        orderChannel = await mqConnection.createChannel();
        await orderChannel.assertExchange(EXCHANGE, 'fanout', {
            durable: false
        });

        // Ensure that the queue exists or create one if it doesn't
        await orderChannel.assertQueue(QUEUE);
        await orderChannel.bindQueue(QUEUE, EXCHANGE, '');
        
        // Only send <PREFETCH_COUNT> emails at a time
        orderChannel.prefetch(PREFETCH_COUNT);
        logger.info(`RabbitMQ connection established at ${amqpServer} with prefetch count ${PREFETCH_COUNT}`);

        orderChannel.consume(QUEUE, order => {
            sendConfirmation(order, orderChannel);
        });
    }
    catch (err) {
        logger.error(`RabbitMQ connection error: ${err}`);
        process.exit();
    }
}

module.exports = {
    amqpConnectAndConsume: amqpConnectAndConsume
}
