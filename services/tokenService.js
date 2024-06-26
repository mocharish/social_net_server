

const jwt = require('jsonwebtoken');
const generateToken = async (userEmail) => {
  const token = jwt.sign({ userEmail }, "your_secret_key");
  return token;
};

module.exports = {
  generateToken
};
