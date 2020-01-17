const express = require('express');
const feedRoutes = require('./routes/feed');
const commentRoutes = require('./routes/comment');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Controll-Allow-Origin', '*');
    res.setHeader('Access-controll-allow-Methods', 'GET,POST,PUT,DELETE,PATCH');
    res.setHeader('Access-Controll-Allow-Headers', 'Content-Type');
    next();
});
app.use('/feed', feedRoutes);
app.use('/comment', commentRoutes);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
