const express = require('express');
const feedRoutes = require('./routes/feed');
const commentRoutes = require('./routes/comment');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Controll-Allow-Origin', '*');
    res.setHeader('Access-controll-allow-Methods', 'GET,POST,PUT,DELETE,PATCH');
    res.setHeader('Access-Controll-Allow-Headers', 'Content-Type');
    next();
});
app.use('/feed', feedRoutes);
app.use('/comment', commentRoutes);

mongoose.connect('mongodb+srv://testuser:V6Akqm9GpkNMcCpA@cluster0-k2j8j.mongodb.net/messages?retryWrites=true&w=majority',{ useNewUrlParser: true ,useUnifiedTopology: true,}).then(result => {
    app.listen(3000);
}).catch(err => console.log(err));

