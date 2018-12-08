const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// Create Schema

const AuthSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: String
  }
});

module.exports = Auth = mongoose.model("auths", AuthSchema);
