const express = require('express');
const router = express.Router();
const userController = require('../../controller/admin/auth');
const {requireSiginin} = require('../../common-middleware/index');
const { validatorSignupRequest, validatorSigninRequest, isRequestValidated } = require('../../validators/auth');

router.post('/admin/signin', validatorSigninRequest, isRequestValidated, userController.sigin);
router.post('/admin/signup', validatorSignupRequest, isRequestValidated, userController.signup);
router.post('/admin/signout',userController.signout);

module.exports = router;
