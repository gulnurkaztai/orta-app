const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.module('Comment', commentSchema)