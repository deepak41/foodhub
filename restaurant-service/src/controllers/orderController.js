const { OrderModel } = require('../models/orderModel');
const { changeOrderStatus } = require('../services/mongoService')

// environment variables
const ORDER_DELIVERY_TIME = parseInt(process.env.ORDER_DELIVERY_TIME) || nconf.get('ORDER_DELIVERY_TIME');

// Process the order
const processOrder = (order, orderChannel) => {
    orderContent = JSON.parse(order.content.toString());
    changeOrderStatus(OrderModel, orderContent._id, 'accepted');
    setTimeout(() => {
        changeOrderStatus(OrderModel, orderContent._id, 'delivered');
        orderChannel.ack(order);
    }, ORDER_DELIVERY_TIME);
}

module.exports = {
    processOrder: processOrder
}
