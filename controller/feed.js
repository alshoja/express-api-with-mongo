<<<<<<< HEAD
=======
const { validationResult } = require('express-validator/check');

>>>>>>> 4887e5838e28c18c56da18d4dcccb997ebbfcc3c
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
<<<<<<< HEAD
=======
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ message: 'Validation failed', errors: errors.array() })
    }
>>>>>>> 4887e5838e28c18c56da18d4dcccb997ebbfcc3c
    res.status(201).json({
        message: 'postcreated succesfully',
        post: { id: new Date(), content: "some content created" }
    });
};

exports.updatePost = (req, res, next) => {
    res.json({ message: 'some content updated' });
};

<<<<<<< HEAD
exports.deletePost = (req,res,next) =>{
    res.json({message:'some content deleted'});
=======
exports.deletePost = (req, res, next) => {
    res.json({ message: 'some content deleted' });
>>>>>>> 4887e5838e28c18c56da18d4dcccb997ebbfcc3c
};