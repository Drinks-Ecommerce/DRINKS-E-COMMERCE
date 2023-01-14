const { Router } = require ("express");
const router = Router();

const { addProductCart } = require('../../controllers/cartControllers');



router.post('/addProduct', addProductCart);



module.exports = router