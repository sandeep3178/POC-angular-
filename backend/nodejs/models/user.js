const mongoose = require('mongoose');
var formdata = mongoose.model('formdata', {
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true

    },
    confirmPassword: {
        type: String,
        require: true
    },
    id: {
        type: Number
    }

})
module.exports = { formdata };