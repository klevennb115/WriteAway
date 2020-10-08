const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const userID = req.user.id;
    const queryText = 'SELECT * FROM writing_entry WHERE user_username=$1 ORDER BY id;';
    pool.query(queryText, [userID])
        .then(results => res.send(results.rows))
        .catch((err) => { console.log(err);
         });
});

router.post('/', (req, res) => {
    const userID = req.user.id;
    const contents = req.body.text;
    const title = req.body.title;
    const genre = req.body.genre;
    const timeLength = req.body.time_length;
    const entryLength = req.body.entry_length;
    const entryPrompt = req.body.entry_prompt;
    const subTime = req.body.subTime;

    const queryText = 'INSERT INTO writing_entry (user_username, entry_name, entry_contents,entry_genre, entry_time_length, entry_length, entry_prompt, submission_time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);';
    pool.query(queryText, [userID, title, contents, genre,timeLength, entryLength, entryPrompt, subTime])
        .then(() => { res.sendStatus(201); })
        .catch((err) => { 
            console.log(err);
            res.sendStatus(500);
         });
});

router.delete('/:id', (req,res) =>{
    let entry = req.params;
    const queryText = `DELETE FROM "writing_entry" WHERE "id" = $1;`;
    pool.query(queryText, [entry.id]);
    res.sendStatus(200);
});

router.put('/:id', (req,res) =>{
    let entry = req.params.id;
    let content = req.body.text;
    let newContent = JSON.parse(content);
    
    const queryText = `UPDATE "writing_entry" SET "entry_contents"= $1
                       WHERE "id" = $2;`;
    pool.query(queryText, [newContent, entry])
        .then(() => { res.sendStatus(201); })
        .catch((err) => { next(err); });
})

module.exports = router;