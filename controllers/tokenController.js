const userService = require('../services/userService');
const tokenService = require('../services/tokenService');




const login = async (req, res) => {
    try {
        console.log('login controller');
        const { email, password } = req.body;
        const user = await userService.authenticateUser(email, password);
        
        if (user) {
            const token = await tokenService.generateToken(user.email);
            console.log(token);
            return res.status(201).json({ user, token });
        } else {
            return res.status(404).send('Invalid email or password');
        }
    } catch (error) {
        console.error('Error in login:', error);
        return res.status(500).send('Internal server error');
    }
};

module.exports = {
    login
};