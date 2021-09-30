const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    price:{
        type: Number,
        required:true
    },
    description:{
        type: String,
        required:true,
        trim:true,
    },
    quantity:{ //product quantity
        type:Number,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    expiryDate:{
        type: Date,
        required:true
    },
    nutritionInfo:{
        type: String,
        required:true, 
    },
    offer:{ type: Number},
    productPictures:[
        { 
            img:{type:String}
        }
    ],
    reviews:[
        {
            userId : {type: mongoose.Schema.Types.ObjectId,ref:'User'},
            review: String
        }
    ],
    category:{
        type: mongoose.Schema.Types.ObjectId,ref:'Category',
        required:true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,ref:'User',
        required:true,
        updatedAt: Date
    }


},{timestamps:true});

module.exports = mongoose.model('Product',productSchema);

/*

Types: of Products

1)vegetables
2)Fruits
3)Frozen Exotic Fruits/vegetable
4)Milk Products - panner,cheese
5)Dry Fruit
*/