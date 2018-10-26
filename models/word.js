const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config/database');

const newWordSchema = mongoose.Schema({
    word:{
        type:String,
        required: true
    },
    tags:{
        type:Array
        
    },
    updated:{
        type:Date,
        default:Date.now()
    },
    owner:{
        type:String
    }
});


const Word = module.exports = mongoose.model('Word', newWordSchema);

module.exports.addNewWord=function(newWord, callback) {
    newWord.save(null, callback);
}

module.exports.findByWord=function(word, callback) {
    Word.findOne({word:word.word}, callback);
}

module.exports.getAllWords= function({}, callback) {
    Word.find({}, callback);
}
module.exports.addSuggestedWord= function(SuggestedWord, callback) {
    SuggestedWord.save(null, callback);
}