const express = require('express');
const router = express.Router();
const companyCtrl = require('../controller/companyCtrl')
const authCompany = require('../middleware/authCompany')

router.post('/register', companyCtrl.register)

// router.post('/activation', companyCtrl.activateEmail)

router.post('/login', companyCtrl.login)

router.post('/refresh_token', companyCtrl.getAccessToken)

// router.post('/forgot', companyCtrl.forgotPassword)

router.post('/reset', authCompany, companyCtrl.resetPassword)

// router.get('/infor', authCompany, companyCtrl.getUserInfor)

// router.get('/all_infor', auth, authAdmin, companyCtrl.getUsersAllInfor)

router.get('/logout', companyCtrl.logout)


router.get('/mypost', authCompany, companyCtrl.myPosts)

router.post('/create_post', authCompany, companyCtrl.createNewPost)

router.get('/list_user/:id', authCompany, companyCtrl.listUserApply)

router.patch('/update_post', authCompany, companyCtrl.updatePost)

router.delete('/delete_post/:id', authCompany, companyCtrl.deletePost)




module.exports = router