const { Products, Type } =  require( "../db");
const { Op } = require("sequelize");

const getProducts = async() => {
    try {
        const products = await Products.findAll({
            include:{
                model:Type,
                attributes:["name"],
                through : {attributes:[]}
            }
        })
        const result = await products.map(e=>{
            return{
                id:e.id,
                name: e.name,
                amount:e.amount,
                price:e.price,
                description:e.description,
                img:e.img,
                comments:e.comments,
                type: e.type
            }
        })
        return result;
       
    } catch (error) {
        console.log(error)
    }
}


 const getProduct = async (name) => {
    try {
      
        const productname = await Products.findAll({
            where: {
                name:{[Op.iLike]: `%${name}%`}
            },
            include:{
                model:Type,
                attributes: ["name"],
                through: {
                  attributes: [],
                }   
            }
        })

        const res = await productname.map(e=>{
            return{
                id:e.id,
                name: e.name,
                amount:e.amount,
                price:e.price,
                description:e.description,
                img:e.img,
                comments:e.comments,
                type: e.type
            }
        })
        return(res)
        
    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
} 



/* const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, amount, price } = req.body

        const product = await Product.findByPk(id);
        product.name = name;
        product.amount = amount;
        product.price = price;

        await product.save();
        return(product)

    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
}

 const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Products.destroy({
            where: {
                id,
            }
        })
        res.json({ msg: "Deleted product" })
    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
} */
module.exports = {getProduct, getProducts}

