const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const userID = req.user.id;
    console.log(userID);
    const queryText = `SELECT * FROM writing_entry
WHERE user_username='${userID}';`;
    pool.query(queryText)
        .then(results => res.send(results.rows))
        .catch((err) => { next(err); });
});

router.post('/', (req, res) => {
    const userID = req.user.id;
    const contents = JSON.parse(req.body.text);
    const title = req.body.title;
    const genre = req.body.genre;
    console.log(genre);
    
    // const title = req.body
    const queryText = 'INSERT INTO writing_entry (user_username, entry_name, entry_contents,entry_genre) VALUES ($1, $2, $3, $4);';
    pool.query(queryText, [userID, title, contents, genre])
        .then(() => { res.sendStatus(201); })
        .catch((err) => { next(err); });
});

router.delete('/:id', (req,res) =>{
    let entry = req.params;
    console.log(entry);
    const queryText = `DELETE FROM "writing_entry" WHERE "id" = $1;`;
    pool.query(queryText, [entry.id]);
    res.sendStatus(200);
});

router.put('/:id', (req,res) =>{
    let entry = req.params.id;
    let content = req.body.text;
    let newContent = JSON.parse(content);
    console.log(content, newContent);
    
    const queryText = `UPDATE "writing_entry" SET "entry_contents"= $1
                       WHERE "id" = $2;`;
    pool.query(queryText, [newContent, entry])
        .then(() => { res.sendStatus(201); })
        .catch((err) => { next(err); });
})

module.exports = router;