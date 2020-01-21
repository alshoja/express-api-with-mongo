const express = require('express');
const feedRoutes = require('./routes/feed');
const commentRoutes = require('./routes/comment');
const bodyParser = require('body-parser');
const app = express();
<<<<<<< HEAD
=======
const mongoose = require('mongoose');
>>>>>>> 4887e5838e28c18c56da18d4dcccb997ebbfcc3c

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Controll-Allow-Origin', '*');
    res.setHeader('Access-controll-allow-Methods', 'GET,POST,PUT,DELETE,PATCH');
    res.setHeader('Access-Controll-Allow-Headers', 'Content-Type');
    next();
});
app.use('/feed', feedRoutes);
app.use('/comment', commentRoutes);

<<<<<<< HEAD
=======
mongoose.connect('');
>>>>>>> 4887e5838e28c18c56da18d4dcccb997ebbfcc3c
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
