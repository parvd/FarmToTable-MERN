const Product = require("../models/Product");
const slugify = require("slugify");

exports.addProduct = (req, res) => {
  
  const {
    name,
    price,
    quantity,
    description,
    category,
    createdBy
    } = req.body;

    let productPictures = [];

    if(req.files.length > 0){
      productPictures = req.files.map(file => {
        return {img : file.filename}
      });
    }
    console.log(productPictures);
    const product = new Product({
      name,
      slug:slugify(name),
      productPictures,
      price,
      category,
      description,
      createdBy : req.user._id,
      quantity
    })

    product.save((error,product)=>{
      if(error) return res.status(400).json({error})
      if(product) return res.status(200).json({product})
    })
};














exports.getProduct = (req, res) => {
  res.status(201).json({ message: "Hi get" });
};
