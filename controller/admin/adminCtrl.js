// const Users = require('../../models/userModel')
// const Companies = require('../../models/companyModel')
// const Posts = require('../../models/postModel')

// const CompanyCtrl = {
//     getCompanyInfor: async (req, res) => {
//         try {
//             const company = await Companies.findById(req.company.id).select('-password')

//             res.json(company)
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     getCompaniesAllInfor: async (req, res) => {
//         try {
//             const companies = await Companies.find().select('-password')

//             res.json(companies)
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     updateCompany: async (req, res) => {
//         try {
//             const name = req.body
//             await Users.findOneAndUpdate({_id: req.user.id}, {
//                 name
//             })

//             res.json({msg: "Update Success!"})
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     deleteCompany: async (req, res) => {
//         try {
//             await Companies.findByIdAndDelete(req.params.id)

//             res.json({msg: "Deleted Success!"})
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     }
// }

// const UserCtrl = {
//     getUserInfor: async (req, res) => {
//         try {
//             const user = await Users.findById(req.user.id).select('-password')

//             res.json(user)
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     getUsersAllInfor: async (req, res) => {
//         try {
//             const users = await Users.find().select('-password')

//             res.json(users)
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     updateUser: async (req, res) => {
//         try {
//             const {name, avatar} = req.body
//             await Users.findOneAndUpdate({_id: req.user.id}, {
//                 name, avatar
//             })

//             res.json({msg: "Update Success!"})
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     deleteUser: async (req, res) => {
//         try {
//             await Users.findByIdAndDelete(req.params.id)

//             res.json({msg: "Deleted Success!"})
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     }
// }

// const PostCtrl = {
//     getPostInfor: async (req, res) => {
//         try {
//             const post = await Posts.findById(req.post.id).select('-password')

//             res.json(post)
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     getUsersAllInfor: async (req, res) => {
//         try {
//             const posts = await Posts.find().select('title')

//             res.json(posts)
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     deleteUser: async (req, res) => {
//         try {
//             await Posts.findByIdAndDelete(req.params.id)

//             res.json({msg: "Deleted Success!"})
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     }
// }


// module.exports = { UserCtrl, CompanyCtrl, PostCtrl};