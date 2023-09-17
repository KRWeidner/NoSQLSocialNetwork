const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  createFriend,
  deleteFriend
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

// /api/user/:userId/friends - route to create a new friend for a user by userId
router.route('/:_Id/friends/:friendId').get(getSingleUser).post(createFriend);

// /api/user/:userId/friends - route to delete a friend for a user by userId
router.route('/:_Id/friends/:friendId').get(getSingleUser).delete(deleteFriend);



module.exports = router;