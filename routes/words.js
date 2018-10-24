const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const Word = require('../models/word');

router.get('/manage', (req, res, nex) => {
    res.json({name:"Hello"});
});
router.post('/manage/getword', (req, res, next) => {
    let word=new Word({
        word:req.body.word
    });
    // console.log(word);
    
    Word.findByWord(word, (err, word) => {
        if(err) throw err;
        if(!word) {
            res.json({success:false, msg:'Failed to find the word'});
        } else {
            res.json({
                success:true,
                tags:word.tags
    
            });
        }

        
        // if(err) {
        // }else{
        //     // res.json({success:true, msg:'Successfully found the word'});
        //     // console.log(word);
        //     res.json(word);
        // }
    });
});
router.post('/manage/words', (req, res, next) => {
    // locationbar
    let newWord = new Word({
        word:req.body.word,
        tags:req.body.tags
    });
    // console.log(newWord);console.log('end');return;
    
    Word.addNewWord(newWord, (err, word) => {
        if(err) {
            res.json({ success: false, msg: 'Failed to add new word' });
        } else {
            res.json({ success: true, msg: 'New word added' });
        }
    });
});

router.get('/manage/getwords', (req, res, next) => {
    Word.getAllWords({}, (err, words) => {
        if(err) throw err;
        if(err) {
            res.json({success:false, msg:'Failed get data'});
        } else {
            res.json(words);
        }
    })
})

module.exports = router;