// HEAR WE CREATE SCHEMA FROM MONGOOSE.SCHEMA AND THAN WE CREATE SCHEMA INSIDE IT'S PARAMETER AND THAN WE CREATE MODEL USING MONGOOSE.MODEL AND THAN EXPORT THAT MODEL
const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // Schema provide karva mate a use thay 6

const menuSchema = new Schema({
    name:{type:String , required:true},
    image:{type:String , required:true},  // always it should be url
    price:{type:Number , required:true},
    size:{type:String , required:true}
})

const Menu = mongoose.model('Menu',menuSchema)  

module.exports=Menu
