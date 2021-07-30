const express = require('express');
const router = express.Router();
const common = require('../common-middleware/index');
const cartController = require('../controller/cart');

router.post('/user/cart/addtocart',common.requireSiginin,common.userMiddleware ,cartController.addItemToCart);

module.exports = router;