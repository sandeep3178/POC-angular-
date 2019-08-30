const mongoose = require('mongoose');
var admin = mongoose.model('admin', {
    name: {
        type: String,
        require: true    //admin model schema in mongoose
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

})
module.exports = { admin };