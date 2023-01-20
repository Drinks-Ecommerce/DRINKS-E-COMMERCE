const { Router } = require ("express");
const router = Router();

const { Review } = require("../../db");


router.put('/:id', async(req,res) => {
    try {
        const { id } = req.params;
        const { comment, calification } = req.body;

        const updateReview = await Review.update(
            { comment, calification },
            {where:{
                id: id
            }}
        )
        res.status(200).send('Review updated')
    } catch (err) {
        console.log(err)
    }
})


module.exports = router;