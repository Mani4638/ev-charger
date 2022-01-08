const mongoose = require('mongoose');
const Schema = mongoose.Schema

const transaction = new Schema({
   userId:[{ type: Schema.Types.ObjectId, ref:'user' }],
   transactionStatus:{type:String},
   price:{type:Number},

   createdAt:{
       type:Date,
       default:Date.now
   }
})
module.exports=mongoose.model('Transaction',transaction)