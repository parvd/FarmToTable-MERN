const express = require('express');
const router = express.Router();
const common = require('../common-middleware/index');
const categoryController = require('../controller/category');
const multer = require('multer');
const path = require('path');
const shortid = require('shortid')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(path.dirname(__dirname),'uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + '-' +file.originalname);
  }
})
const upload = multer({storage});
router.post('/category/create',common.requireSiginin,common.adminMiddleware,upload.single('categoryImage'),categoryController.addCategory);
router.get('/category/getcategory',categoryController.getCategories);

module.exports = router;