const { Router } = require ("express");
const router = Router();

const { deleteProductCart } = require('../../controllers/cartControllers');

router.delete('/delete', deleteProductCart)



module.exports = router