const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    title: {
        type: String,
        trim: true,
        required: true
    },
    text: {
        type: String,
        trim: true,
        required: true
      },
      comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }],
    tags: [String]
},{
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)