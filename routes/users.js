const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
var ObjId = require('mongodb').ObjectID;

// Register

router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, userExists) => {
        if(!userExists) {
            res.json({success:false, msg:'Email already exists!'});
            return false;
        }
        if (err) {
            res.json({ success: false, msg: 'Registration Failed, Please try again!' });
        } else {
            res.json({ success: true, msg: 'User Registered' });
        }
    })
});

router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    // debugger;
    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found!' });
        }
        // debugger;
        User.comparePassword(password, user.password, (err, isMatch) => {
            debugger;
            if (err) throw err;
            if (isMatch) {
                // debugger;
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                // debugger;
                return res.json({success:false, msg:'Wrong password'});
            }
        });
    })
});

router.get('/profile', passport.authenticate("jwt", {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

// rout
module.exports = router;