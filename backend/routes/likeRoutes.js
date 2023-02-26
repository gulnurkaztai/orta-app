const express = require('express')
const router = express.Router()
const {likePost} = require('../controllers/likeController')

router.put('/:id',likePost)

module.exports = router