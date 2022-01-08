const userService = require('../services/user_service');

const Create_user =async (req,res)=>{
    let reqs = req.body
    userService.userCreate(reqs).then(result=>{
        res.send({'code':200,'message':'user Created sucessful','data':result})
    },err=>{
        res.send({'code':err.code,'message':err.message,'err':err})
    })
}
const Find_user = async (req,res)=>{
    let reqs=req.body
    userService.findUser(reqs).then(result=>{
        res.send({'code':200,'message':'user found sucessfull','data':result})
    },err=>{res.send({'code':err.code,'message':err.message,'err':err})})
}
module.exports={Create_user,Find_user}