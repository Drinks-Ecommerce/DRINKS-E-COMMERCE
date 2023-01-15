const { Router } = require("express");
const  { User, Cart, Products, Payment, Orderdetail,Productcart} =require( "../../db");
const OrderDetail = require("../../models/OrderDetail");

const router = Router();

router.get("/", async(req,res,next)=>{
    try {
        const { id } = req.query;
        const user = await User.findOne({
          include: [
              {
                  model: Cart,
                  include:[{model: Productcart}]
              }
          ],
          where: {
              id: id
          }
      })
        let payment = await Payment.findOne({
          where: {userId: id},
        })
        let product = await user.cart.productcarts.map(e=>{
          return{
             id:e.productId,
          } 
        })

        let ordenesDetal = await Orderdetail.findAll({
            where:{paymentId : payment.id }
        })
        
        res.status(200).json({payment,product,ordenesDetal});
      } catch (error) {
        next(error);
      }
   
})



module.exports = router;