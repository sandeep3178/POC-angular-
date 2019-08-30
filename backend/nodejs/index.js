const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db')
var userController = require('./controllers/userController')       //containing all defined modules and route and directs the database and server
var employeeController = require('./controllers/employeeController')
var adminController = require('./controllers/adminController');
const port = 3000;
var app = express();
app.use(bodyParser.json());
app.listen(port, () => {
    console.log("server is running on port" + " " + port);
})

app.use('/formdata', userController);
app.use('/employee', employeeController);
app.use('/admin', adminController);
