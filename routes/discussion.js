const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const Discuss = require('../models/discussion');
var ObjId = require('mongodb').ObjectID;

router.post('/discussion/newsubject', (req, res) => {
    let newSubject = new Discuss({
        subject: req.body.subject,
        email: req.body.email
    });
    Discuss.addNewSubject(newSubject, (err, subject) => {
        if (err) throw err;
        if (err) {
            res.json({ success: false, msg: 'Subject not created' });
        } else {
            res.json({ success: true, msg: 'Subject successfully created' });
        };
    });
});

router.get('/discussion/getsubjects', (req, res) => {
    Discuss.getAllSubjects({}, (err, data) => {
        if (err) throw err;
        if (err) {
            res.json({success:false, msg:"Subjects can't be reached"});
        } else {
            res.json({success:true,data:data});
        }
    })
});

module.exports = router;
