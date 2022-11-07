const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    nameCompany: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Please enter your Phone number!"],
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    information: {
        type: Number,
        default: null
    },
    scale: {
        type: Number,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    avatar: {
        type: String,
        default: null
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("companies", companySchema)