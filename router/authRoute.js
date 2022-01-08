const config =require("../config/config");
const userController = require('../controller/user_controller')
const shopController = require('../controller/shop_controller');
const stationController = require('../controller/station_controller');
const TransController= require('../controller/trans_controller');
const chargeController=require('../controller/Charging_controller')
const multer = require('multer');
var storage = multer.diskStorage({destination: (req, file, cb) => {cb(null, './uploads/shop')},
    filename: (req, file, cb) => {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + new Date().getTime() + '.' + extension);
    }
});
const uploads = multer({storage:storage});

module.exports = function(app){
    console.log("app")
//userLogin
app.post("/api/userlogin",userController.Create_user)
app.get("/api/userlogin",userController.Find_user)
app.post('/api/shop',uploads.fields([{name: 'ShopImage', maxCount: 1
}]),shopController.Shop_Create);
//station add charger
app.post("/api/station",stationController.Create_station)
app.get("/api/station",stationController.Find_station)
// app.put("/api/station",stationController.update_Trans)
// app.delete("/api/station",stationController.find_Trans)
//Transaction
app.post("/api/transaction",TransController.Create_Trans)
app.get("/api/transaction",TransController.find_Trans)
app.put("/api/transaction",TransController.update_Trans)
app.delete("/api/transaction",TransController.find_Trans)
//Charging
app.post("/api/Charging",chargeController.create_Charge)
app.get("/api/Charging",chargeController.find_Charge)
app.put("/api/Charging",chargeController.update_Charge)
app.delete("/api/Charging",chargeController.find_Charge)
}
