const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({

    text: {
        type: String,
        trim: true,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema)