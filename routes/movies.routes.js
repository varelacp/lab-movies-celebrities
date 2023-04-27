// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router();
const { create } = require('hbs');
const Movie = require('../models/Movie.model');
const Celebrity = require('../models/Celebrity.model');

// all your routes here

router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find().populate('cast');
    res.render('movies/movies', { movies });
  } catch (err) {
    console.log(err);
  }
});

router.get('/movies/create', async (req, res) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('movies/new-movie', { celebrities });
  } catch (e) {
    console.log(e);
  }
});

router.get('/movies/:id/edit', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    const celebrities = await Celebrity.find();
    res.render('movies/edit-movie', { movie, celebrities });
  } catch (err) {
    console.log(err);
  }
});

router.post('/movies/:id/edit', async (req, res) => {
  const { title, genre, plot, cast } = req.body;
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, {
      title,
      genre,
      plot,
      cast
    });
    res.redirect(`/movies/${movie._id}`);
  } catch (e) {
    console.log(e);
  }
});

router.post('/movies/create', async (req, res) => {
  const { title, genre, plot, cast } = req.body;
  try {
    await Movie.create({
      title,
      genre,
      plot,
      cast
    });
    res.redirect('/movies');
  } catch (e) {
    console.log(e);
  }
});

router.post('/movies/:id', async (req, res) => {
  try {
    const { title, genre, plot, cast } = req.body;
    await Movie.findByIdAndUpdate(req.params.id, {
      title,
      genre,
      plot,
      cast
    });
    res.redirect(`/movies/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
});

router.post('/movies/:id/delete', async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect('/movies');
  } catch (err) {
    console.log(err);
  }
});

router.get('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate('cast');
    res.render('movies/movie-details', { movie });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
