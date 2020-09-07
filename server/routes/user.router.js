const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  res.send(req.user);
});

router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = 'INSERT INTO person (username, password) VALUES ($1, $2) RETURNING id';
  pool.query(queryText, [username, password])
    .then(() => { res.sendStatus(201); })
    .catch((err) => { next(err); });
});

router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

router.post('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

router.put('/:id', (req, res) => {
  let user = req.params.id;
  let content = req.body.newGoal;

  const queryText = `UPDATE "person" SET "word_goal"= $1
                       WHERE "id" = $2;`;
  pool.query(queryText, [content, user])
    .then(() => { res.sendStatus(200); })
    .catch((err) => { 
      console.log(err);
      res.sendStatus(500);
    });
})

module.exports = router;
