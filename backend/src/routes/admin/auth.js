const express = require('express');
const router = express.Router();
const userController = require('../../controller/admin/auth');
const {validatorSignupRequest,validatorSigninRequest,isRequestValidated} = require('../../validators/auth');
router.post('/admin/signin',validatorSigninRequest,isRequestValidated,userController.sigin);

router.post('/admin/signup',validatorSignupRequest,isRequestValidated,userController.signup);

module.exports = router;