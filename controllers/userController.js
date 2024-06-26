

const User = require('../models/users');
const jwt = require('jsonwebtoken');

// Controller function to create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, dob, gender, photo } = req.body;

    const newUser = new User({
      name,
      email,
      password,
      dob,
      gender,
      photo
    });

console.log("newUser:",newUser);
console.log("newUser:",newUser.friends);


    await newUser.save();
    console.log('User created');
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to fetch user data by username
exports.getUserByUsername = async (req, res) => {
  const paramEmail = req.params.email;
  
  const token = req.headers.authorization.split(' ')[1];

  console.log("token-server:",token);
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  try {
    const decoded = jwt.verify(token, "your_secret_key");
    console.log("decoded:",decoded.userEmail);
    console.log("paramEmail:",paramEmail);
    if(decoded.userEmail==paramEmail){
      console.log("User is authenticated");
      const user =await User.findOne({ email: paramEmail });
      //console.log("user:",user);
      if (!user) {
        console.log("User not found");
        return res.status(404).json({ message: 'User not found' });
      }
        return res.status(200).json(user);
      
    }

  }catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid' });
  }
};
