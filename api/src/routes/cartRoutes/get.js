const { Router } = require ("express");
const router = Router();

const { User, Cart, Productcart, Products } =  require( "../../db");

router.get('/:id', async(req,res) => {
    const { id } = req.params
    try {
            let cart = await Cart.findOne({
                include: [
                    {
                        model: User,
                        where: { id: id}
                    },
                    {
                        model: Productcart,
                        include: { 
                            model: Products,
                        },
                    }
                ],
            order: [[Productcart, "createdAt", "DESC"]],
            });
            res.send(cart)
    } catch (err) {
        console.log(err)
    }
})


module.exports = router