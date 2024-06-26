const User = require('../models/users');
const Post = require('../models/posts');
const jwt = require('jsonwebtoken');
exports.getUserByEmail = async (req, res) => {
  try {
    console.log("getUserByEmail- profileController.js");
    const userEmail = req.params.email;
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};




exports.addFriendRequest = async (req, res) => {
    try {
      console.log("Adding friend request...");
      const { userEmail, connectedEmail } = req.body;
      console.log("userEmail: ", userEmail);
      console.log("connectedEmail: ", connectedEmail);
  
      const user = await User.findOne({ email: userEmail });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Add the connected user's email to the requestsForFriends array
      user.requestsForFriends.push(connectedEmail);
      await user.save();
  console.log("Friend request added successfully");
      return res.status(200).json({ message: 'Friend request added successfully' });
    } catch (error) {
      console.error('Error adding friend request:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };


  exports.cancelFriendRequest = async (req, res) => {
    try {
      console.log("Canceling friend request...");
      const { userEmail, connectedEmail } = req.body;
  
      // Find the user making the request
      const user = await User.findOne({ email: userEmail });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Remove the connected user's email from the requestsForFriends array
      user.requestsForFriends = user.requestsForFriends.filter(request => request !== connectedEmail);
      await user.save();
  
      return res.status(200).json({ message: 'Friend request canceled successfully' });
    } catch (error) {
      console.error('Error canceling friend request:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  


  exports.cancelFriendship = async (req, res) => {
    try {
      console.log("Canceling friendship...");
      const { userEmail, connectedEmail } = req.body;
  
      // Find the user making the request
      const user = await User.findOne({ email: userEmail });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Remove the connected user's email from the friends list
      user.friends = user.friends.filter(friend => friend !== connectedEmail);
      await user.save();
  
      return res.status(200).json({ message: 'Friendship canceled successfully' });
    } catch (error) {
      console.error('Error canceling friendship:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  



  exports.acceptFriendRequest = async (req, res) => {
    try {
      console.log("Accepting friend request...");
      const { userEmail, connectedEmail } = req.body;
  
      // Find the user making the request
      const user = await User.findOne({ email: userEmail });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Add connected user's email to user's friends list
      user.friends.push(connectedEmail);
      await user.save();
  
      // Find the connected user
      const connectedUser = await User.findOne({ email: connectedEmail });
      if (!connectedUser) {
        return res.status(404).json({ message: 'Connected user not found' });
      }
  
      // Add user's email to connected user's friends list
      console.log("connectedUser: ", connectedUser);
      connectedUser.friends.push(userEmail);
      await connectedUser.save();
  
      // Remove the friend request from the requestsForFriends array
      user.requestsForFriends = user.requestsForFriends.filter(request => request !== connectedEmail);
      await user.save();
  
      return res.status(200).json({ message: 'Friend request accepted successfully' });
    } catch (error) {
      console.error('Error accepting friend request:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  exports.getUserPosts = async (req, res) => {
    const { authorization } = req.headers;
  
    try {
  
      const token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, 'your_secret_key');
      const userEmail = decoded.userEmail;
      console.log('userEmail-getAllPosts', userEmail);
  
      const user = await User.findOne({ email: userEmail });
   
      const userPosts = await Post.find({ email: userEmail }).sort({ date: -1 });
      const posts = [userPosts];
      res.status(200).json(posts);
    
    } catch (error) {
      console.error('Error fetching UserPosts:', error);
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  };