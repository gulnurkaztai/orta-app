const express  = require("express")
const router = express.Router()
const {registerUser, loginUser, getMe, getUsers, updateProfile} = require("../controllers/userController")
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/:id/me', protect, getMe)
router.get('/', getUsers)
router.patch('/update/:id', protect, updateProfile)


module.exports = router