const router = express.Router()
const { ITEM_PRICE } = require('../resources/constants');

// Get the menu
router.get('/', (req,res) => {
    itemNames = Object.keys(ITEM_PRICE);
    items = itemNames.map((itemName) => {
        return { name: itemName, price: ITEM_PRICE[itemName] }
    })
    res.status(200).json({items: items});
});

module.exports = {
    menuRouter: router
}