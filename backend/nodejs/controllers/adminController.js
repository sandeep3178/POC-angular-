const express = require('express');
var cors = require('cors');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { admin } = require('../models/admin');
router.use(cors());
//localhost:3000/employees/
router.get('/', (req, res) => {
    admin.find((err, docs) => {
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
    admin.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    });

});
router.post('/', (req, res) => {
    var emp = new admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
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
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    }
    admin.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no record');
    admin.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    });


})
module.exports = router; 