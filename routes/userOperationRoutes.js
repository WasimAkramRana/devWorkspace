var express            = require('express');
var router             = express.Router();
var userValidationCtrl = require('../controllers/userOperationCtrl'); // require user validation controller

/**
* API routes for user validation actions
*/
router.post('/signup',             userValidationCtrl.signup);
router.post('/login',              userValidationCtrl.login);
router.post('/changePassword',     userValidationCtrl.changePassword);
router.post('/forgotPassword',     userValidationCtrl.forgotPassword);
router.post('/resetPassword',      userValidationCtrl.resetPassword);
router.post('/refreshToken',       userValidationCtrl.generateRefreshToken);
router.put('/userSettings',        userValidationCtrl.updateUesrSettings);
router.get('/verifyEmail',         userValidationCtrl.verifyEmail);
router.get('/:emailId/user/exist', userValidationCtrl.isUserExist);
router.get('/userProfileImage',    userValidationCtrl.getUserProfileImage);

module.exports = router; // Export user validation actions routes
