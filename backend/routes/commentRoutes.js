const express = require('express')
const router = express.Router({mergeParams:true})
const {protect} = require('../middleware/authMiddleware')
const {createComment} = require('../controllers/commentController')

router.route('/').post(protect, createComment)

module.exports = router