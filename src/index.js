const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://pablo:testepablo123@ds121475.mlab.com:21475/tweet_study', { useNewUrlParser: true })

app.use((req,res, next) => {
    req.io = io;
    return next();
})
app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(80, () => {
    console.log('Server started on port 80');
})