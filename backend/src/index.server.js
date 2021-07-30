const express = require('express');
const env = require ('dotenv');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/auth');
const adminRoutes= require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const path = require('path');
const cors = require('cors');
env.config();
app.use(cors());
app.use(express.json());
app.use('/public',express.static(path.join(__dirname,'uploads')));

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.99lal.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true,
  useFindAndModify:false
})
.then(() => {
  console.log('MongoDB Connected…')
})
.catch(err => console.log(err));

app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.listen(process.env.PORT,()=>{
    console.log(`Server Started on ${process.env.PORT}`);

});
 