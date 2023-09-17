const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
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



module.exports = router;