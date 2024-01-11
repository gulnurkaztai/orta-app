const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

const likePost = asyncHandler(async (req, res) => {
  const { _id } = req.body.likeAuthor;

  try {
    const likeAuthor = await User.findById(_id);

    const post = await Post.findById(req.params.id);

    const alreadyLiked = !!post.likes.find((p) => p == _id);

    if (alreadyLiked) {
      // console.log(pul, "pull");
      const update = await Post.findByIdAndUpdate(req.params.id, {
        $pull: { likes: mongoose.Types.ObjectId(_id) },
      });
      // console.log(update, "update");
      return res.status(200).json({ success: true, message: "Like removed" });
    }

    await Post.updateOne(
      { _id: req.params.id },
      { $push: { likes: likeAuthor._id } }
    );
    return res.status(200).json({ success: true, message: "Post liked" });
  } catch (err) {
    console.log(err);
  }
});

const getLikes = asyncHandler(async (req, res) => {
  const likedPost = await Post.findById(req.params.id);

  res.status(200).json(likedPost.likes.length);
});

module.exports = { likePost, getLikes };
