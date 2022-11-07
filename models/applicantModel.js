const mongoose = require('mongoose')


const applicantSchema = new mongoose.Schema({
    userApplyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companies',
        required: true
    },
    postApplyId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("applicant", applicantSchema)