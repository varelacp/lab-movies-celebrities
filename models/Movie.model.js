const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [
    {
      ref: 'Celebrity',
      type: Schema.Types.ObjectId
    }
  ]
});

const movieModel = model('Movie', movieSchema);

module.exports = movieModel;
