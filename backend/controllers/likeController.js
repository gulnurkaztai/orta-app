const asyncHandler = require('express-async-handler');
const Post = require('../models/postModel')

const likePost = asyncHandler(async (req,res)=>{

    // const post = await Post.findById(req.params.postId);
    // const updatedPost = await Post.findByIdAndUpdate(req.params.postId, {likeCount: post.likeCount + 1}, {new: true})

    const likedPost = await Post.updateOne({_id:req.params.postId},{$inc: {likeCount: 1}})

    res.status(200).json(likedPost)

})

module.exports = {likePost}