const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config/database');

// Users Schema

const SuggestionSchema = mongoose.Schema({
    word: {
        type: String
    },
    email: {
        type: String
    },
    status: {
        type: Number
    },
    created:{
        type:Date,
        default:Date.now
    }
});

const Suggestion = module.exports = mongoose.model('Suggestion', SuggestionSchema);

module.exports.makeSuggestion = function (row, callback) {
    Suggestion.find({ word: row.word }, (err, word) => {
        if (word.length) {
            callback(true, false);
        } else {
            if (err) throw err;
            row.save(callback);
        }
    });
}

module.exports.getAllSuggestionsByEmail = function (email, callback) {
    Suggestion.find({ email: email },{}, { sort: { '_id' : -1 } }, callback);
}

module.exports.getAllSuggestedWords=function({}, callback) {
    Suggestion.find({status:0}, callback);
}

module.exports.changeSuggestedWordStatus=function(word, callback) {
    Suggestion.findOneAndUpdate({word:word}, {$set:{status:1}}, callback);
}

module.exports.rejectSuggestion= function(word, callback) {
    Suggestion.findOneAndUpdate({word:word}, {$set:{status:2}}, callback);
}