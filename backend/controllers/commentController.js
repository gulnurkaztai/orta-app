const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Post = require('../models/postModel')
const Comment = require('../models/commentModel')


// Create new comment
const createComment = asyncHandler(async (req,res)=>{

    if(!req.body.text){
        res.status(400)
        throw new Error('A comment cannot be empty')
    }

    const comment = await Comment.create({
        user_id: req.user.id,
        post_id: req.params.postId,
        text: req.body.text
    })

    res.status(201).json(comment)
})

// 



module.exports = {
    createComment
}