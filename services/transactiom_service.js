const transService = require('../models/transaction_model');

const CreateTrans= async (req,res)=>{
    try{ return await transService.create(req)
    }catch(err){ return err }
}
const findTrans =async(req,res)=>{
    try{ return await transService.find(req)
    }catch(err){ return err}
}
const updateTrans= async (req,res)=>{
    try{let update = await transService.findById(req.body['id']);
      let body = req.body;
      let get =Object.assign(update,body);
      return await update.save();}
  catch (err){ res.send({'err':err,'message':req.files});}
};
const deleteTrans = async(req,res)=>{
    try{let del = await transService.findById(req.params.id);
        if(del != null){del.remove();}
        else{ res.send ({'err':404,'message':"ID not found"});}
    }catch(err){res.send ({'err':err,'message':message});}
  };
module.exports={CreateTrans,findTrans,updateTrans,deleteTrans}