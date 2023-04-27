//  Add your code here
const { Schema, model } = require('mongoose');

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const celebritieModel = model('Celebrity', celebritySchema);

module.exports = celebritieModel;
