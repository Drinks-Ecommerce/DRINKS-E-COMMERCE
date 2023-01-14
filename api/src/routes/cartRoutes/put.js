const { Router } = require ("express");
const router = Router();

const { updateProductCart } = require('../../controllers/cartControllers')

router.put('/', updateProductCart)


module.exports = router