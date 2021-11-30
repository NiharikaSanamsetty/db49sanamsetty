const mongoose = require("mongoose") 
const ballSchema = mongoose.Schema({ 
    color: String, 
    material: {type:String, required:true}, 
    cost: { type: Number, min: 5, max: 70, default: 0 }, 
}) 
 
module.exports = mongoose.model("ball", 
ballSchema) 