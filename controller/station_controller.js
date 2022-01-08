const StationService=require('../services/station_service');

const Create_station= async(req,res)=>{
    let reqs = req.body;
    StationService.CreateStation(reqs).then(result=>{
        res.send({'code':200,'message':'Created sucessfull','data':result})
    },err=>{
        res.send({'code':err.code,'message':err.message,'err':err}) 
    })
}
const Find_station= async(req,res)=>{
    let reqs = req.body;
    StationService.findStation(reqs).then(result=>{
        res.send({'code':200,'message':'Created sucessfull','data':result})
    },err=>{
        res.send({'code':err.code,'message':err.message,'err':err}) 
    })
}
const update_Charge = async(req,res)=>{let reqs=req;
    StationService.updateStation(reqs).then(result=>{
         res.send({'code':200,'message':'Update Successfully','data':result})
       },err=>{res.send({'code':err.code , 'message':err.message,'err':err})});
     }
const delete_Charge  = async(req,res)=>{let reqs=req;
    StationService.deleteStation(reqs).then(result=>{
       res.send({'code':200,'message':"deleted Successfully",})
     },err=>{res.send({'code':err.code , 'message':err.message,'err':err})});
    }
module.exports={Create_station,Find_station,update_Charge,delete_Charge}