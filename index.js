const http = require('http');
const mongoose= require('mongoose');
const express= require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const moment= require('moment');
const app = express();
const hostname='127.0.0.1'
const server = http.createServer(app)
const config = require('./config/config');
const { connect } = require('http2');
const port = config.node_port || 5000 ;

app.use(bodyParser.json());
app.use(cors());
server.listen(port,()=>{
    console.log("server is Running" + port);
    console.log('*****++++++++++++*****')
mongoose.connect(`${config.db_name}`,{useNewUrlParser: true,useUnifiedTopology:true})
.then(()=>{
    console.log('DataBase connected sucessfull')
    let router =require('./router/authRoute')
    router(app)
},err=>{
    console.log('DataBase connection Failed');
})
});
