const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    pool.query('SELECT * FROM "prompts";')
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for secrets:', error);
            res.sendStatus(500);
        });
});

router.post('/', (req,res) => {
    const promptId = req.body.typeOfPrompt;
    const prompt = req.body.text;
    console.log("in router", prompt, promptId);
    const queryText = "INSERT INTO prompts (type_of_prompt, text) VALUES ($1,$2);";

    pool.query(queryText, [
            promptId,
            prompt
        ])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
})

router.get("/prompt-type", (req, res) => {
	pool
		.query('SELECT * FROM "prompt_type";')
		.then((results) => res.send(results.rows))
		.catch((error) => {
			console.log("Error making SELECT for secrets:", error);
			res.sendStatus(500);
		});
});
module.exports = router;