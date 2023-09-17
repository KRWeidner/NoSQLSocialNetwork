const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/thought - route to create a new thought
router.route('/').get(getThoughts).post(createThought);

// /api/thought/:thoughtId - route to delete a thought by their Id
router.route('/:_Id').get(getSingleThought).delete(deleteThought);

// /api/thought/:thoughtId - route to update a thought by their Id
router.route('/:_Id').get(getSingleThought).put(updateThought);

// /api/thought/:thoughtId - route to get a thought by their Id
router.route('/:_Id').get(getSingleThought);

// /api/thought - route to get all thoughts
router.route('/').get(getThoughts);

// /api/thought/:thoughtId/reactions - route to create a reaction and append to thought with Id
router.route('/:_Id/reactions').get(getSingleThought).post(createReaction);

// /api/thought/:thoughtId/reactions - route to delete a reaction
router.route('/:_Id/reactions/:reactionId').get(getSingleThought).delete(deleteReaction);



module.exports = router;