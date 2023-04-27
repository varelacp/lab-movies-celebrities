// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router();
const { create } = require('hbs');
const Celebrity = require('../models/Celebrity.model');

// all your routes here

router.get('/celebrities', async (req, res) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('celebrities/celebrities', { celebrities });
  } catch (err) {
    console.log(err);
  }
});

router.get('/celebrities/create', async (req, res) => {
  try {
    const newCelebrity = await Celebrity.find();
    res.render('celebrities/new-celebrity', { newCelebrity });
  } catch (e) {
    console.log(e);
  }
});

router.post('/celebrities/create', async (req, res) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    await Celebrity.create({
      name,
      occupation,
      catchPhrase
    });
    res.redirect('/celebrities');
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
