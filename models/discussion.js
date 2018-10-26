const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config/database');

const DiscussSchema = mongoose.Schema({
    subject: {
        type: String
    },
    email: {
        type: String
    },
    status: {
        type: Number,
        default:1
    },
    created:{
        type:Date,
        default:Date.now
    },
});

const Discussion = module.exports = mongoose.model('Discussion', DiscussSchema);

module.exports.addNewSubject=function(row, callback) {
    row.save(callback);
}

module.exports.getAllSubjects=function({}, callback) {
    Discussion.find({}, {}, { sort: { '_id' : -1 } }, callback);
}