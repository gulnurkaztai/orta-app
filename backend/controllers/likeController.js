const asyncHandler = require('express-async-handler');
const Post = require('../models/postModel')

const likePost = asyncHandler(async (req,res)=>{

    const post = await Post.findById(req.params.postId);
    const updatedPost = await Post.findByIdAndUpdate(req.params.postId, {likeCount: post.likeCount + 1}, {new: true})

    res.status(200).json(updatedPost)

})

module.exports = {likePost}