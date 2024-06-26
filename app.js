


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const customEnv = require('custom-env');
const Post = require('./models/posts');
const profileRouter = require('./routes/profile');
const userRoute = require('./routes/users');
const tokenRoute = require('./routes/token');
const postsRouter = require('./routes/posts');
const profileRoutes = require('./routes/profile');
customEnv.env(process.env.NODE_ENV, './config');

const app = express();
const PORT = process.env.PORT || 8080;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ limit: '50mb' })); 
app.use(cors());

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.static('public'));


app.use('/api/users', userRoute);
app.use('/api/token', tokenRoute);
app.use('/api/posts', postsRouter);
app.use('/api/profile', profileRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
