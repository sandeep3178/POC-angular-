const express = require('express');
var cors = require('cors');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { employee } = require('../models/employee');
router.use(cors());
// base url: localhost:3000

// employeeurl:-localhost:3000/employees/
router.get('/', (req, res) => {    //get api for employee server controller
    employee.find((err, docs) => {  //mongodb command to fetch data from mongodb
        if (!err) {
            res.send(docs);
        }
        else {
            console.log("error in req")
        }
    });

})
router.get('/:id', (req, res) => {   //get api by id for employee server controller
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no record');
    employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    });

});
router.post('/', (req, res) => {   //post api  for server using server controller
    var emp = new employee({
        empcode: req.body.empcode,
        name: req.body.name,
        department: req.body.department,
        phone: req.body.phone,
        location: req.body.location,
        today: req.body.today,
    });
    emp.save((err, doc) => {   //mongodb command to store data in database
        if (!err) {
            res.send(doc);
        }
    });
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no record');



    var emp = {
        empcode: req.body.empcode,
        name: req.body.name,
        department: req.body.department,
        phone: req.body.phone,
        location: req.body.location,
    }
    employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {  //mongodb command to update data in database
        if (!err) {
            res.send(doc)
        }
    });
});
router.delete('/:id', (req, res) => {   //delete api for employee controller
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no record');
    employee.findByIdAndDelete(req.params.id, (err, doc) => {  //mongodb delete command for deleting data in database
        if (!err) {
            res.send(doc)
        }
    });


})
module.exports = router; 