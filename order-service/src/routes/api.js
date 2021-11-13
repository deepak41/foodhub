const { menuRouter } = require('./menuRouter');
const { orderRouter } = require('./orderRouter');
const { infoRouter } = require('./infoRouter');

// Generates all routes for the application
const initializeRoutes = (app) => {
    app.use('/api/info', infoRouter);    
    app.use('/api/menu', menuRouter);
    app.use('/api/orders', orderRouter);
}

module.exports = {
    initializeRoutes: initializeRoutes
}