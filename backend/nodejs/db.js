const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/POC", (err) => {
    if (!err) {
        console.log("connection is successful..");

    }                                                // code to connect frontend with mongodb via mongoose
    else {
        console.log("problem in connection");


    }
});
module.exports = mongoose; 
