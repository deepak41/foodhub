const mongoose = require('mongoose');

// environment variables
const MONGO_CONTAINER_NAME = process.env.MONGO_HOST || nconf.get('MONGO_HOST');
const MONGO_URL = `mongodb://${MONGO_CONTAINER_NAME}:27017/${nconf.get('DB_NAME')}`;

// Connect to MongoDB
const mongoConnect = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err) => {  
        if(err) {
            logger.error(`MongoDB connection error: ${err}`);
        }
    })
    mongoose.connection.on('connected', function () {  
        logger.info(`MongoDB connection established at ${MONGO_URL}`);
    }); 
    
    // When the connection is disconnected
    mongoose.connection.on('disconnected', function () {  
        logger.error(`MongoDB connection error: No connection with mongodb server`);
    });
}


// Change order status with ID
const changeOrderStatus = (OrderModel, orderId, status) => {
    OrderModel.findByIdAndUpdate(orderId, { status: status }, (err, order) => { 
        if (err){ 
            logger.error(`Order update error: ${err}`);
        } 
        else{ 
            logger.info(`Order ID ${orderId} is ${status}`); 
        } 
    }); 
}

module.exports = {
    mongoConnect: mongoConnect,
    changeOrderStatus: changeOrderStatus
}