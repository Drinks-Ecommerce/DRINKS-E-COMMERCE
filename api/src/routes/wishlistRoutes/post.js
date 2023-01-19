const router = require('express').Router();
const { Products, Wishlist } = require('../../db');

router.post('/', async (req, res) => {
	const {
		userId,
		products
	} = req.body;

	try {
		const newList = await Wishlist.create({
			userId
		});

		const newListProduct = await Products.findAll({
			where: { name : products },
		});

		newList.addProducts(newListProduct);
		res.send('Producto agregado con exito');
	} catch (error) {
		console.log(error);
	}
});


module.exports = router;