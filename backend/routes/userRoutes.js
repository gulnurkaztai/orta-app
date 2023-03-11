const express  = require("express")
const router = express.Router()
const {registerUser, loginUser, getMe, getUsers, updateProfile} = require("../controllers/userController")
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/', getUsers)
router.patch('/update/:id', protect, updateProfile)
// router.post('/update/:id', protect, uploadImg)

module.exports = router