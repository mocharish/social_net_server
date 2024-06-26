

const Post = require('../models/posts');

const createPost = async (content, author,email, pic) => {
  const post = new Post({content, author,email,pic});
  return await post.save();
};

module.exports = { createPost };
