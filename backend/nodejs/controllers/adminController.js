const express = require('express');
var cors = require('cors');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { admin } = require('../models/admin');
router.use(cors());
//baseurl : localhost:3000
//admin url : localhost:3000/admin/
router.get('/', (req, res) => {        // get api for server
    admin.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log("error in req")
        }
    });

})
router.get('/:id', (req, res) => {   //get api using id for server
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no record');
    admin.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    });

});
router.post('/', (req, res) => {  // post api for server
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
router.put('/:id', (req, res) => {   //post api using id for server
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
router.delete('/:id', (req, res) => {  //delete api for server
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no record');
    admin.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    });


})
module.exports = router; 