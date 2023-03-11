const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,

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
        type :String 
    },
    bio: {
        type: String,
        default: ""
    },

    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
},
{
    timestamps: true
}, 
{ typeKey: '$type' }
)

module.exports = mongoose.model('User', userSchema)