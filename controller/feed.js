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
    res.status(201).json({
        message: 'postcreated succesfully',
        post: { id: new Date(), content: "some content created" }
    });
};

exports.updatePost = (req, res, next) => {
    res.json({ message: 'some content updated' });
};

exports.deletePost = (req,res,next) =>{
    res.json({message:'some content deleted'});
};