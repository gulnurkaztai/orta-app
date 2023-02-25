const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 30
    },
    bio: {
        type: String,
        required: true,
        min: 2,
        max: 150
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    avatarPic: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
},
{
    timestamps: true
}
)

module.exports = mongoose.model('User', userSchema)