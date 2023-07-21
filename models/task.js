const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    Description : {
        type : String,
        required : true
    },

    DueDate : {
        type : String,
        required : true
    },

    categories : {
        type : String,
        required : true
    }
});

const Task = mongoose.model('Task' , taskSchema);
module.exports = Task;