const express = require('express');
const {validatorSignupRequest,validatorSigninRequest,isRequestValidated} = require('../validators/auth');
const router = express.Router();
const userController = require('../controller/auth');


router.post('/signin',validatorSigninRequest,isRequestValidated,userController.sigin);

router.post('/signup',validatorSignupRequest,isRequestValidated,userController.signup);

/* router.post('/profile',userController.requireSiginin,(req,res)=>{
    res.status(200).json({user: 'profile'})
}); */
module.exports = router;