const transService=require('../services/transactiom_service');

const Create_Trans= async (req,res)=>{
    let reqs = req.body
    transService.CreateTrans(reqs).then(result=>{
        res.send({'code':200,'message':"created sucessfull",'data':result})
    },err=>{
        res.send({'code':err.code,'message':err.message,'err':err})
    })
}
const find_Trans= async(req,res)=>{
    let reqs=req.body
    transService.findTrans(reqs).then(result=>{
        res.send({'code':200,'message':" file found sucessfull",'data':result}) 
    },err=>{
        res.send({'code':err.code,'message':err.message,'err':err}) 
    })
}
const update_Trans = async(req,res)=>{let reqs=req;
    transService.updateTrans(reqs).then(result=>{
         res.send({'code':200,'message':'Update Successfully','data':result})
       },err=>{res.send({'code':err.code , 'message':err.message,'err':err})});
     }
const delete_Trans  = async(req,res)=>{let reqs=req;
    transService.deleteTrans(reqs).then(result=>{
       res.send({'code':200,'message':"deleted Successfully",})
     },err=>{res.send({'code':err.code , 'message':err.message,'err':err})});
    }
module.exports={Create_Trans,find_Trans,update_Trans,delete_Trans}