const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/admin/userCtrl')
const companyCtrl = require('../controller/admin/companyCtrl')
const postCtrl = require('../controller/admin/postCtrl')

const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


//Users
router.get('/infor_user/:id', auth, authAdmin, userCtrl.getUserInfor)

router.get('/all_infor_users', auth, authAdmin, userCtrl.getUsersAllInfor)

router.patch('/update_user', auth, authAdmin, userCtrl.updateUser)

router.delete('/delete_user/:id', auth, authAdmin, userCtrl.deleteUser)





//Companies
router.get('/infor_company/:id', auth, authAdmin, companyCtrl.getCompanyInfor)

router.get('/all_infor_companies', auth, authAdmin, companyCtrl.getCompaniesAllInfor)

// router.patch('/update_company', auth, companyCtrl.updateCompany)

router.delete('/delete_company/:id', auth, authAdmin, companyCtrl.deleteCompany)





//Posts
router.get('/infor_post/:id', auth, postCtrl.getPostInfor)

router.get('/all_infor_posts', auth, authAdmin, postCtrl.getPostsAllInfor)

router.delete('/delete_post/:id', auth, authAdmin, postCtrl.deletePost)



module.exports = router