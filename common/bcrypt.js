const bcrypt = require('bcrypt-nodejs');

 var common={}

common.genhash=(pass)=>{
    return new Promise ((resolve,reject)=>{
        bcrypt.hash(pass,null,function(err,hash){
            if(err) return reject(err.message)
           resolve(hash)
        })
    })
}

common.compare=function(pass,userPass){
    return new Promise((resolve,reject)=>{
        bcrypt.compare(pass,userPass,(err,res)=>{
          if(err) return reject({'err':err.code,'message':'Incorrect Password'}) 
            resolve(res)
        })
    })
}
module.exports=common

