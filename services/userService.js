
const User = require('../models/users');

const authenticateUser = async (email, password) => {
    try {
        // Find the user by email
        const user = await User.findOne({ email });

        // If user doesn't exist, return null
        if (!user) {
            console.log('User not found with email:', email);
            return null;
        }

        // Check if the provided password matches the password in the database
        if (user.password !== password) {
            console.log('Password does not match');
            return null;
        }

        // If user exists and password matches, return the user object
        console.log('User found:', user);
        return user;
  
    } catch (error) {
        console.error('Error in authenticateUser:', error);
        throw error;
    }
};

module.exports = {
    authenticateUser
};
