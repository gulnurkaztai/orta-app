const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {likePost} = require('../controllers/likeController')

router.put('/:id/likes',protect, likePost)

module.exports = router