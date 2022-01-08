const jwt = require('jsonwebtoken');
const config=require('../config/config');

var token= {}

token.jwt=(resp)=>{
    return jwt.sign(resp,config.secret_key,{expiresIn:"12h"})
}
module.exports=token