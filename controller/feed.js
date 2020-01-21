const { validationResult } = require('express-validator/check');

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
    res.status(201).json({
        message: 'postcreated succesfully',
        post: { id: new Date(), content: "some content created" }
    });
};

exports.updatePost = (req, res, next) => {
    res.json({ message: 'some content updated' });
};

exports.deletePost = (req, res, next) => {
    res.json({ message: 'some content deleted' });
};