const ChargeService = require('../services/Charging_service');

const create_Charge = async (req,res)=>{
    let reqs = req.body
    ChargeService.ChargeService(reqs).then(result=>{
        res.send({'code':200,'message':"Created sucessfull",'data':result})
    },err=>{res.send({'code':err.message,'message':err.message,'err':err})})
}
const find_Charge = async (req,res)=>{
    let reqs = req.body
    ChargeService.ChargeService(reqs).then(result=>{
        res.send({'code':200,'message':"found sucessfull",'data':result})
    },err=>{res.send({'code':err.message,'message':err.message,'err':err})})
}
const update_Charge = async(req,res)=>{let reqs=req;
    ChargeService.updateCharge(reqs).then(result=>{
         res.send({'code':200,'message':'Update Successfully','data':result})
       },err=>{res.send({'code':err.code , 'message':err.message,'err':err})});
     }
const delete_Charge  = async(req,res)=>{let reqs=req;
    ChargeService.deleteCharge(reqs).then(result=>{
       res.send({'code':200,'message':"deleted Successfully",})
     },err=>{res.send({'code':err.code , 'message':err.message,'err':err})});
    }
module.exports={create_Charge,find_Charge,update_Charge,delete_Charge}
