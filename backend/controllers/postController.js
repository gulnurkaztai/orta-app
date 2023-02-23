const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const Post = require('../models/postModel')

// @desc Get user posts
// @route GET /api/posts
// @access Public
const getPosts = asyncHandler(async (req,res)=>{

    const posts = await Post.find();

    res.status(200).json(posts)

})

// @desc Get user post
// @route GET /api/posts/:id
// @access Public
const getPost = asyncHandler(async (req,res)=>{
    const post = await Post.findById(req.params.id)

    if(!post){
        res.status(404)
        throw new Error('Post not found')
    } 

    res.status(200).json(post)
})

// @desc Create new post
// @route POST /api/posts/create
// @access Private
const createPost = asyncHandler(async (req,res)=>{
    const {title, text, tags} = req.body

    if(!title || !text){
        res.status(400)
        throw new Error('Please make sure your post has a title, description and the body text')
    }

    const post = await Post.create({
        user: req.user.id,
        title ,
        text,
        comments: [],
        tags: []
    })

        res.status(201).json(post)

})

// @desc Delete user post
// @route delete /api/posts/:id
// @access Private
const deletePost = asyncHandler(async (req,res)=>{
    const post = await Post.findById(req.params.id)

    if (!post) {
      res.status(404)
      throw new Error('post not found')
    }
  
    if (post.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('Not Authorized')
    }

    await post.remove()
    res.status(200).json({success: true})
})

// @desc Update user post
// @route Update /api/posts/:id
// @access Private
const updatePost = asyncHandler(async (req,res)=>{
    const post = await Post.findById(req.params.id)

    if (!post) {
      res.status(404)
      throw new Error('post not found')
    }
  
    if (post.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('Not Authorized')
    }

    const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedPost)
})


module.exports = {
    getPost,
    getPosts,
    createPost,
    deletePost,
    updatePost
    
}