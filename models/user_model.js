const mongoose = require("mongoose");
const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const Schema = mongoose.Schema

const profile = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,
        validate: [validateEmail, {message:'Invalid email address'}],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    mobile:{type:String,required:true,unique:true},
    pincode:{type:String},
    createdAt:{
        type:Date,
        default:Date.now}
});
module.exports= mongoose.model("user",profile)