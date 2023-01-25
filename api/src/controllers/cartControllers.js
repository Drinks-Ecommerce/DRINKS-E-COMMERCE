const  { User, Cart, Productcart, Products }  = require("../db");

const updateTotalValue = async(cart) => {
    //busco los productos cargados en el carrito y calculo el total
    let loadedProducts = await Productcart.findAll({where: { cartId: cart.id}});
    let totalCart = await loadedProducts.map(e => e.totalValue).reduce((a,b)=> a+b,0);

    return await cart.update({ total: totalCart});
}

const addProductCart = async(req, res) => {
    try {
        const { productId, userId, quantity } = req.body;
        //busco el usuario dueño del carrito y el producto que quiero agregar
        let user = await User.findOne({
            where: { id: userId}
        })
        let product = await Products.findOne({
            where: { id: productId}
        })

        let cart = null;
        //si el usuario no tenia carrito lo creo y se lo asigno
        if(!user.cartId) {
            cart = await Cart.create({ total: product.price });
            await user.update({ cartId: cart.id});
        }else {
        //si ya tenia carrito lo traigo y busco los productos que tiene    
            cart = await Cart.findOne({
                where: { id: user.cartId },
                include: { model: Productcart}
            });
        }
        //vemos si el producto ya esta agregado o no al carrito

        let findProduct = await cart.productcarts?.find(e => e.productId == productId);
        if(findProduct){
            return res.send('Product already exists in the cart')
        }else {
            let totalValue = product.price;
            await Productcart.create({
                quantity:1,
                totalValue,
                cartId: cart.id,
                productId: product.id,
                img:product.img,
                name:product.name,
                priceProduct:product.price
            });
        await updateTotalValue(cart);

            res.send('Product uploaded successfully');
        }

    } catch (err) {
        console.log(err)
    }
} 




const deleteProductCart = async (req, res) => {
    try {
        const { productCardId } = req.query;
        let productCart = await Productcart.findOne({
        where: { id: productCardId }
    });
    await productCart.destroy();

    const cart = await Cart.findOne({ where: { id: productCart.cartId} });
    updateTotalValue(cart); 
    res.send('Product has been removed');
    } catch (error) {
        console.log(error)
    }
};


const updateProductCart = async(req,res) => {
    try {
        const { productCartId, amount } = req.body;
        let productCart = await Productcart.findOne({
            where: { id : productCartId }
        });

        let product = await Products.findOne({
            where:{id: productCart.productId}
        })

        let totalValue;
        let quantity;

        if(amount === "+"){
            if(product.stock > 1){
                totalValue = productCart.totalValue + parseInt(productCart.priceProduct);
                quantity = productCart.quantity + 1;
            }else{
                return res.send({msg:"stock insuficiente"})
            }
            
        }else if(amount === "-"){
            if(productCart.quantity > 1){
                totalValue = productCart.totalValue - parseInt(productCart.priceProduct);
                quantity = productCart.quantity - 1;
            }else{
                return res.send({msg:"cantidad minima 1"})
            }
        }
        
        await productCart.update({ quantity, totalValue });
        const cart = await Cart.findOne({ where: { id: productCart.cartId }});
        updateTotalValue(cart);
        res.send('updated')
    } catch (err) {
        console.log(err)
    }
}



module.exports = { addProductCart, updateTotalValue, deleteProductCart, updateProductCart }