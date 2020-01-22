const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema;

const postSchema= new mongooseSchema({
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('post',postSchema);