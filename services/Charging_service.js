const ChargeService=require('../models/Charging_model')

const CreateCharging = async(req,res)=>{
    try{ return await ChargeService.create(req)
    }catch(err){ return err}
}
const findCharging = async(req,res)=>{
    try{return await ChargeService.find(req)
    }catch(err){return err
    }
}
const updateCharge= async (req,res)=>{
    try{let update = await ChargeService.findById(req.body['id']);
      let body = req.body;
      let get =Object.assign(update,body);
      return await update.save();}
  catch (err){ res.send({'err':err,'message':req.files});}
};
const deleteCharge = async(req,res)=>{
    try{let del = await ChargeService.findById(req.params.id);
        if(del != null){del.remove();}
        else{ res.send({'err':404,'message':"ID not found"});}
    }catch(err){res.send({'err':err,'message':message});}
  };
module.exports={CreateCharging,findCharging,updateCharge,deleteCharge}