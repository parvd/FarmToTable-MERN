const express = require('express');
const router = express.Router();
const common = require('../common-middleware/index');
const productController = require('../controller/product');
const multer = require('multer');
const path = require('path');
const shortid = require('shortid')
console.log(path.dirname(__dirname));
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(path.dirname(__dirname),'uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + '-' +file.originalname);
  }
})
const upload = multer({storage});
router.post('/product/create',common.requireSiginin,common.adminMiddleware ,upload.array('productPictures'),productController.addProduct);
router.get('/product/get',productController.getProduct);

module.exports = router;