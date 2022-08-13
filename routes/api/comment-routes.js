const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

//set up addComment() route
router
    .route('/:pizzaId')
    .post(addComment);

// set up a Delete route at /api/comments/pizzas/:id

router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment)

//delete route
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);


module.exports = router;