const mongoose = require('mongoose');
var employee = mongoose.model('employee', {
    empcode: {
        type: String,
    },
    name: {
        type: String,     //employee model schema in mongoose
        require: true
    },
    department: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true

    },
    today: {
        type: Date,
    },
    id: {
        type: Number
    }

})
module.exports = { employee };