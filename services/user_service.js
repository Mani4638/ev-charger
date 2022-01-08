const userModel = require('../models/user_model');

const userCreate = async(req,res)=>{
    try{return await userModel.create(req)}catch (err){
        res.send({"code":err.code,"message":err.message})}}

const findUser = async(req,res)=>{
    try{return await userModel.find(req)}catch(err)
    {res.send({"code":err.code,"message":err.message})}}
const updateUser= async (req,res)=>{
    try{let update = await userModel.findById(req.body['id']);
      let body = req.body;
      let get =Object.assign(update,body);
      return await update.save();}
  catch (err){ res.send({'err':err,'message':req.files});}
};
const deleteUser = async(req,res)=>{
    try{let del = await userModel.findById(req.params.id);
        if(del != null){del.remove();}
        else{ res.send ({'err':404,'message':"ID not found"});}
    }catch(err){res.send ({'err':err,'message':message});}
  };
module.exports={userCreate,findUser,updateUser,deleteUser}