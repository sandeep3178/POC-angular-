const express = require('express');
var cors = require('cors');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { formdata } = require('../models/user');
router.use(cors());
// base url: localhost:3000
//localhost:3000/user/ 
router.get('/', (req, res) => {  //get api for getting data from database send by server
    formdata.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log("error in req")
        }
    });

})
router.get('/:id', (req, res) => {  //get api call by id  in usercontroller
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no record');
    formdata.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    });

});
router.post('/', (req, res) => { //post api call
    var emp = new formdata({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });
    emp.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }
    });
});
router.put('/:id', (req, res) => {  //put api call
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no record');



    var emp = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    }
    formdata.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    });
});
router.delete('/:id', (req, res) => {  //delete api call
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no record');
    formdata.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    });


})
module.exports = router; 