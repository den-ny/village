//Dependencies
const mongoose = require("./connection");

//Shorthand Variables
const Schema = mongoose.Schema;
const model = mongoose.model;

//Define User Schema
const userSchema = new Schema({
    Username: String,
    Password: String,
    Karma: Number
});

const User = model("User", userSchema);

//Export User Model
module.exports = User;