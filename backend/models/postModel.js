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
    selectedFile: {
        type: String
      },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }],
      likeCount: {
        type: Number,
        default: 0
      },
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
},{
    
})

module.exports = mongoose.model('Post', postSchema)