const mongoose = require("mongoose"),
uniqueValidator = require("mongoose-unique-validator")

const PetSchema = new mongoose.Schema({
    name:{type:String, required:[true,"Name is required!"], minlength: [3,"It should be more than two letters"]},
    type:{type:String, required:[true,"Type is required!"], minlength: [3,"It should be more than two letters"]},
    description:{type:String, required:[true,"Description is required!"], minlength: [2,"It should be more than two letters"]},
    skill:{type:String},

},{timestamps:true})

PetSchema.plugin(uniqueValidator)
module.exports.Pet = mongoose.model("Pet", PetSchema)