const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/userCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.post('/register', userCtrl.register)

// router.post('/activation', userCtrl.activateEmail)

router.post('/login', userCtrl.login)

router.post('/refresh_token', userCtrl.getAccessToken)

// router.post('/forgot', userCtrl.forgotPassword)

router.post('/reset', auth, userCtrl.resetPassword)

router.get('/infor', auth, userCtrl.getUserInfor)

// router.get('/all_infor', auth, authAdmin, userCtrl.getUsersAllInfor)

router.get('/logout', userCtrl.logout)

router.patch('/update', auth, userCtrl.updateUser)

// router.patch('/update_role/:id', auth, authAdmin, userCtrl.updateUsersRole)

// router.delete('/delete/:id', auth, authAdmin, userCtrl.deleteUser)

router.post('/search_post/:id', auth, userCtrl.searchPost)


router.post('/apply_post/:id', auth, userCtrl.applyPost)



// Social Login
router.post('/google_login', userCtrl.googleLogin)

router.post('/facebook_login', userCtrl.facebookLogin)


module.exports = router