const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    vacancy: {
        type: String,
        required: [true, "Please enter vacancy!"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter description!"],
        trim: true,
    },
    companyInfor: {
        type: String,
        required: [true, "Please enter companyInfor!"]
    },
    deadLine: {
        type: String,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
    // userApply: {
    //     type: [{userName: String, idUser: mongoose.Schema.Types.ObjectId}],
    //     required: true,
    //     default: null
    // }
}, {
    timestamps: true
})

postSchema.index({description: 'text'});

const Posts = mongoose.model('posts', postSchema);

Posts.createIndexes({description: 'text'})

module.exports = Posts