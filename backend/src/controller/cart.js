const Cart = require('../models/cart');

exports.addItemToCart =(req,res)=>{
    Cart.findOne({user:req.user._id})
    .exec((error,cart)=>{
        if(error) return res.status(400).json({error});
        if(cart){
            //if cart already exists then update cart by quantity
            const product = req.body.cartItems.product;
            const item = cart.cartItems.find(c => c.product == product);
            let action,condition;
            if(item){
                condition={ "user":req.user._id, "cartItems.product":product};
                action={
                    "$set":{
                        "cartItems.$":{
                            ...req.body.cartItems,
                            quantity:item.quantity + req.body.cartItems.quantity
                        }
                    }
                };
                Cart.findOneAndUpdate(condition,action)
                .exec((error,_cart)=>{
                    if(error) return res.status(400).json({error});
                    if(_cart){
                        return res.status(201).json({cart:_cart});
                    }
                })
            }
            else{
                condition={ "user":req.user._id};
                action={
                    "$push":{
                        "cartItems":req.body.cartItems
                    }
                };
                Cart.findOneAndUpdate(condition,action)
                .exec((error,_cart)=>{
                    if(error) return res.status(400).json({error});
                    if(_cart){
                        console.log(_cart);
                        return res.status(201).json({cart:_cart});
                    }
                })
            }

        }
        else{
            //if cart not exist then create a new item in cart
            const cart = new Cart({
                user:req.user._id,
                cartItems: req.body.cartItems
            });
            cart.save((error,cart)=>{
                if(error) return res.status(400).json({error});
                if(cart){
                    return res.status(201).json({cart});
                }
            })
            
            
        }
    })
    
} 

