const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
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
}
)

module.exports = mongoose.model('User', userSchema)