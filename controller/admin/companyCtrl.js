const Companies = require('../../models/companyModel')

const CompanyCtrl = {
    getCompanyInfor: async (req, res) => {
        try {
            const company = await Companies.findById(req.company.id).select('-password')

            res.json(company)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getCompaniesAllInfor: async (req, res) => {
        try {
            const companies = await Companies.find().select('-password')

            res.json(companies)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateCompany: async (req, res) => {
        try {
            const name = req.body
            // more information
            await Users.findOneAndUpdate({_id: req.user.id}, {
                name
            })

            res.json({msg: "Update Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteCompany: async (req, res) => {
        try {
            await Companies.findByIdAndDelete(req.params.id)

            res.json({msg: "Deleted Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = CompanyCtrl;