const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../../controllers/userController');

// /api/user - route to create a new user
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId - route to delete a user by their Id
router.route('/:_Id').get(getSingleUser).delete(deleteUser);

// /api/user/:userId - route to update a user by their Id
router.route('/:_Id').get(getSingleUser).put(updateUser);

// /api/user/:userId - route to get a user by their Id
router.route('/:_Id').get(getSingleUser);

// /api/user - route to get all users
router.route('/').get(getUsers);



module.exports = router;