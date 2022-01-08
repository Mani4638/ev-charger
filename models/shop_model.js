const mongoose = require('mongoose');
const Schema = mongoose.Schema

const shop = new Schema({
    name:{type:String,required:true},
    address:{type:String},
    email:{type:String},
    contact:{type:Number,maxlength:10},
    ShopImage:{type:String},
   
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('shop_detail',shop)