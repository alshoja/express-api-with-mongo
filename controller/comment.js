exports.getComments = (req, res, next) => {
    res.json({ message: "bunch of data" });
};

exports.createComments = (req, res, next) => {
    res.json({ message: "some content created" });
};

exports.updateComment = (req, res, next) => {
    res.json({ message: 'some content updated' });
};

exports.deleteComment = (req, res, next) => {
    res.status(200).json({ message: 'deleted' });
};