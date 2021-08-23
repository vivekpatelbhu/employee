var mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true
    },
    name: {
        type: String,
        default:''
    },
    password: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: true
    }

},{timestamps:true})
module.exports = mongoose.model('Employee', employeeSchema);