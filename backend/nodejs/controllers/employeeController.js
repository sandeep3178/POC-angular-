const express = require('express');
var cors = require('cors');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { employee } = require('../models/employee');
router.use(cors());
//localhost:3000/employees/
router.get('/', (req, res) => {
    employee.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log("error in req")
        }
    });

})
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no record');
    employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    });

});
router.post('/', (req, res) => {
    var emp = new employee({
        empcode: req.body.empcode,
        name: req.body.name,
        department: req.body.department,
        phone: req.body.phone,
        location: req.body.location,
        today: req.body.today,
    });
    emp.save((err, doc) => {
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
    employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no record');
    employee.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    });


})
module.exports = router; 