const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

});

/**
 * POST route template
 */
//need to figue out how to insert
router.post('/', (req, res) => {
    const username = req.user.username;
    const contents = req.body
    const queryText = 'INSERT INTO writing_entry (user_username, entry_contents) VALUES ($1, $2)';
    pool.query(queryText, [username, contents])
        .then(() => { res.sendStatus(201); })
        .catch((err) => { next(err); });
});

module.exports = router;