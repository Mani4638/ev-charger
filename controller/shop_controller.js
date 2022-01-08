const shopService = require('../services/shop_service');

const Shop_Create = async(req,res)=>{
    let reqs=req;
    shopService.ShopCreate(reqs).then(result=>{
        res.send({'code':200,'message':'Created sucessfull','data':result})
    },err=>{res.send({'code':err.code,'message':err.message,'err':err})}) 
};
module.exports={Shop_Create};