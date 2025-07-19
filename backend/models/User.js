//A model is how we define what a "User" looks like in the database

//User.js:Defines the structure of a user in your database:

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
