const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    key:{
        type:String,
        required:true
    },
    nested:{
        type:Boolean,
        required:true
    }

});

const todoModel  = mongoose.model("Todo", todoSchema);

module.exports = todoModel;