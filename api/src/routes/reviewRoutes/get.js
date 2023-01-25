const { Router } = require("express");
const { Review, User } = require("../../db");

const router = Router();
const { getAllReviews, getReviewByUserId, getReviewByProductId } = require('../../controllers/reviewControllers')


router.get("/", async (req, res) => {
    try {
        const { userId, productId } = req.query;
        if(userId){
            const comment = await getReviewByUserId(userId)
            res.send(comment)
        }
        else if(productId){
            const comment = await getReviewByProductId(productId)
            res.send(comment)
        }
        else{
            const allComments = await getAllReviews()
            res.send(allComments)
        }
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;