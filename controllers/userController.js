const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();

      const userObj = {
        users,
      };

      res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params._Id });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }

      res.json({
        user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params._Id });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json({ message: 'User successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params._Id },
        { $set: req.body },
        {new: true});

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json({ message: 'User successfully updated' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a new friend for a user
  async createFriend(req, res) {
    try {
        const friend = await User.findOne({ _id: req.params.friendId });
        const user = await User.findOneAndUpdate(
            { _id: req.params._Id },
            { $addToSet: { friends: friend._id }},
            {new: true});
    
          if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a friend for a user
  async deleteFriend(req, res) {
    try {
        const friend = await User.findOne({ _id: req.params.friendId });
        const user = await User.findOneAndUpdate(
            { _id: req.params._Id },
            { $pull: { friends: friend._id }},
            {new: true});
    
          if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};