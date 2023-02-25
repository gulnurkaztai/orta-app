const express = require('express')
const router = express.Router({mergeParams:true})
const {likePost} = require('../controllers/likeController')

router.route('/').patch(likePost)

module.exports = router