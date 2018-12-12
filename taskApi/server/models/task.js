const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Tasks need a title"]}, 
    description: {type: String, required: [true, "Give a description"]}
} , {timestamps:true}) 

mongoose.model('Task', TaskSchema);

module.exports = TaskSchema; 