const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config/database');

// Users Schema

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function (username, callback) {
    const q = { username: username };
    User.findOne(q, callback);
}

module.exports.addUser = function (newUser, callback) {
    User.find({ email: newUser.email }, function (err, docs) {
        if (docs.length) {
            callback(true, false);
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, null, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save(callback);
                });
            });
        }
    });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    })

}