const mongoose = require ('mongoose');
const Schema = mongoose.Schema

const Charging = new Schema({
    deviceId:{type:String},
    deviceName:{type:String},
    duration:{type:String},
    chargeingFee:{type:Number},
    Energy:{type:String},
    power:{type:String},
    startTime:{type:Date},
    endTime:{type:Date},
    status:{type:String},

    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('Charging',Charging)