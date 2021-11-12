const { Order } = require('../models/orderModel');
const { ITEM_PRICE } = require('../resources/constants');
const { publishOrderToExchange } = require('../services/mqService');
const router = express.Router()


// Get order details based on order ID.
router.get('/:orderId', (req,res, next) => {
    Order.findById(req.params.orderId).select('-__v -items._id').exec((err, order) => {
        if(err) return next(err);
        res.status(200).json(order);
    })
});


// Place a new order
router.post('/', (req, res, next) => {
    let orderDetails = req.body;

    // calculate total amount
    orderDetails.total = orderDetails.items.reduce((currentTotal, item) => {
        return currentTotal + ITEM_PRICE[item.name]*item.quantity
    }, 0);

    let newOrder = new Order(orderDetails);
    newOrder.save((err, order) => {
        if(err) return next(err);
        // place the order on the queue
        publishOrderToExchange(order); 

        res.status(201).json(order);
    })
});

module.exports = {
    orderRouter: router
}