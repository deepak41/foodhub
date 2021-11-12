const { ORDER_SERVICE_WELCOME_MSG } = require('../resources/constants');
const router = express.Router()

router.get('/', (req,res) => {
    res.status(200).json({message: ORDER_SERVICE_WELCOME_MSG});
});

module.exports = {
    infoRouter: router
}