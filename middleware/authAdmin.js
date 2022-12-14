const Users = require('../models/userModel')
const Companies = require('../models/companyModel')

const authAdmin = async (req, res, next) => {
    try {
        const user = await Users.findOne({_id: req.user.id})

        const company = await Companies.findOne({_id: req.company.id})

        if(user.role !== 1 || company.role !== 1) 
            return res.status(500).json({msg: "Admin resources access denied."})

        next()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authAdmin