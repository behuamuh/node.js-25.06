const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, default: 'John' },
  lastName: { type: String },
});

module.exports = mongoose.model('User', userSchema, 'users');
