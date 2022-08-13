const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

//set up addComment() route
router
    .route('/:pizzaId')
    .post(addComment);

// set up a Delete route at /api/comments/pizzas/:id

router
    .route('/:pizzaId/:commentId')
    .delete(removeComment);


module.exports = router;