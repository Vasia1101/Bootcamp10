const mongoose = require('mongoose');
const bCrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true,
  },
  hash: {
    type: String,
    required: [true, 'Password required'],
  },
  nick: {
    type: String,
    set: i => (i === '' ? 'Anonim' + new Date() : i),
  },
  token: {
    type: String,
  },
});

userSchema.methods.setPassword = function(password) {
  this.hash = bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

userSchema.methods.validPassword = function(password) {
  return bCrypt.compareSync(password, this.hash);
};

userSchema.methods.setToken = function(token) {
  this.token = token;
};

mongoose.model('user', userSchema);
