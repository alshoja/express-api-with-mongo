const { validationResult } = require('express-validator');
const Post = require('../model/post');

exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                title: 'my post', content: 'this is my first post'
            },
            {
                title: 'my post2', content: 'this is my first post2'
            }

        ]
    }
    );
};

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ message: 'Validation failed', errors: errors.array() })
    }
    const content = req.body.content;
    const post = new Post({
        content: content
    });
    post.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Post created succesfully',
            post: result
        });
    }).catch(err => {
        console.log(err);
    });
   
};

exports.updatePost = (req, res, next) => {
    res.json({ message: 'some content updated' });
};

exports.deletePost = (req, res, next) => {
    res.json({ message: 'some content deleted' });
};