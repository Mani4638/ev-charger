const shopModel = require('../models/shop_model');

const ShopCreate = async(req,res)=>{
    console.log(req.body)
    req.body['ShopImage'] = req.files['ShopImage'][0].path;
    console.log(req.body)
    try{return await shopModel.create(req.body) }
    catch(err){return (err.message)}
}
module.exports={ShopCreate}