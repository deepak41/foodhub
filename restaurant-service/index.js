global.nconf = require('nconf');
nconf.file({file: './src/resources/config.json'});
global.logger = require('./src/resources/winstonPlugin');
const { startServer } = require('./src/app')
const SLEEP_TIME = process.env.SLEEP_TIME || nconf.get('SLEEP_TIME');

// Sleep till MongoDB and RabbitMQ services start.
logger.info(`Sleeping for ${SLEEP_TIME}ms. Giving time for RabbitMQ & MongoDB services to start`);
setTimeout(() => {
    startServer();
    logger.info(`Restaurant-Service started`)
}, SLEEP_TIME)
