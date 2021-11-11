const mongoose = require("mongoose") 
const ballSchema = mongoose.Schema({ 
    color: String, 
    material: String, 
    cost: Number 
}) 
 
module.exports = mongoose.model("ball", 
ballSchema) 