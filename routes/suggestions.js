const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const Suggestions = require('../models/suggestions');
var ObjId = require('mongodb').ObjectID;

router.post('/suggestions/make', (req, res) => {
    let suggestion = new Suggestions({
        word: req.body.word,
        email: req.body.email,
        status: req.body.status
    });

    Suggestions.makeSuggestion(suggestion, (err, exist) => {

        if (err) {
            if (!exist) {
                res.json({ success: false, msg: 'Suggestion Already Exists!' });
                return false;
            }
            res.json({ success: false, msg: 'Suggestion request failed!' });

        } else {
            res.json({ success: true, msg: 'Successfully made a suggestion!' });
        }
    });
});

router.post('/suggestions/getsuggestions', (req, res, next) => {
    Suggestions.getAllSuggestionsByEmail(req.body.email, (err, suggestions) => {
        if (err) throw err;
        if (err) {
            res.json({ success: false, msg: 'Failed get data' });
        } else {
            res.json(suggestions);
        }
    })
});

router.get('/suggestions/getallsuggestions', (req, res) => {
    Suggestions.getAllSuggestedWords({}, (err, words) => {
        if (err) throw err;
        if (err) {
            res.json({ success: false, msg: 'Failed get data' });
        } else {
            res.json(words);
        }
    })
});

router.put('/suggestions/updatesuggestedwordstatus', (req, res) => {
    let word=new Suggestions({
      word:req.body.word  
    });
    Suggestions.changeSuggestedWordStatus(word.word, (serr, sword) => {
        if (serr) {
            res.json({ success: false, msg: 'Failed update word status' });
        } else {
            res.json({ success: true, msg: 'Word status updated' });
        }
    });
})

router.put('/suggestions/rejectsuggestion', (req, res) => {
    // console.log(req.body);return;
    
    let word=new Suggestions({
      word:req.body.word  
    });
    Suggestions.rejectSuggestion(word.word, (err, sword) => {
        if (err) {
            res.json({ success: false, msg: 'Failed update word status' });
        } else {
            res.json({ success: true, msg: 'Word suggestion rejected' });
        }
    });
})

module.exports = router;