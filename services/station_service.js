const stationModel=require('../models/station_model');

const CreateStation = async (req,res)=>{
    try{return await stationModel.create(req)}catch (err){
        res.send({"code":err.code,"message":err.message})}};
const findStation =async (req,res)=>{
    try{return await stationModel.find(req)}catch (err){
        res.send({"code":err.code,"message":err.message})}}; 
const updateStation= async (req,res)=>{
    try{let update = await stationModel.findById(req.body['id']);
      let body = req.body;
      let get =Object.assign(update,body);
      return await update.save();}
  catch (err){ throw new ApiError({'err':err,'message':req.files});}
};
const deleteStation = async(req,res)=>{
    try{let del = await stationModel.findById(req.params.id);
        if(del != null){del.remove();}
        else{ throw new ApiError({'err':404,'message':"ID not found"});}
    }catch(err){ throw new ApiError({'err':err,'message':message});}
  };

module.exports={CreateStation,findStation,updateStation,deleteStation}