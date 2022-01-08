const mongoose = require('mongoose');
const Schema = mongoose.Schema

const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ["Point"],
      required: true
    },
    coordinates: {
      type: [],
      required: true
    }
  });
  const start_end_hours = mongoose.Schema({
    start:{type:Date  },
    end:{type:Date }
  });
  const station_hours = mongoose.Schema({
    mon:start_end_hours,
    the:start_end_hours,
    wed:start_end_hours,
    thu:start_end_hours,
    fri:start_end_hours,
    sat:start_end_hours,
    sun:start_end_hours
  })
  const Station = new Schema({
      location:{type:String},
      location1:{
        type: pointSchema,
        index: '2dsphere' // Create a special 2dsphere index 
      },
      deviceId:{type:String},
      deviceName:{type:String},
      stackedLabel:{type:String},
      active:{type:Boolean},
      available:{type:Boolean},
      station_hours:station_hours,

      createdAt:{
          type:Date,
          default:Date.now
      },
      updatedAt:{
        type:Date,
        default:Date.now
    }            
  })
  module.exports=mongoose.model("add charger",Station);