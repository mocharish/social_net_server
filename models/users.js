const { request } = require('express');
const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true },
  password: { 
    type: String, 
    required: true },
  dob: { 
    type: Date, 
    required: true },
  gender: { 
    type: String, 
    required: true },
  photo: { 
    type: String },
    friends: {
      type: Array,
      default: []
    },
    requestsForFriends: {
      type: Array,
      default: []
    },
  
});     
// Create and export User model
module.exports = mongoose.model('User', userSchema);
