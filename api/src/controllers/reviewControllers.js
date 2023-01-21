const { Review } = require("../db");

const getAllReviews = async() => {
    try {
        const all = await Review.findAll()

        const resultOfAll  = await all.map(e => {
            return {
                userId: e.userId,
                productId: e.productId,
                calification: e.calification,
                comment: e.comment
            }
        })
        return resultOfAll
    } catch (err) {
        console.log(err)
    }
}

const getReviewByUserId  = async(userId) => {
    try {
        const allById = await Review.findAll({
            where:{
                userId: userId
            }
        })

        const resultAllByUserId = await allById.map(e=>{
            return {
                userId: e.userId,
                productId: e.productId,
                calification: e.calification,
                comment: e.comment
            }
        })
        return resultAllByUserId
    } catch (err) {
        console.log(err)
    }
}

const getReviewByProductId = async(productId) => {
    try {
        const allByProductId = await Review.findAll({
            where:{
                productId: productId
            }
        })
        const resultAllByProductId = await allByProductId.map(e=>{
            return {
                userId: e.userId,
                productId: e.productId,
                calification: e.calification,
                comment: e.comment
            }
        })
        return resultAllByProductId
    } catch (err) {
        console.log(err)
    }
}




module.exports = { getAllReviews, getReviewByUserId, getReviewByProductId };
