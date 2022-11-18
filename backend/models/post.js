//Dependencies
const mongoose = require("./connection");
const userObject = require("./user")

//Shorthand Variables
const Schema = mongoose.Schema;
const model = mongoose.model;

//Define Post Schema
const postSchema = new Schema({
    OwnerID: String,
    Image: String,
    Title: String,
    Description: String
});

const Post = model("Post", postSchema);

//Export post Model
module.exports = Post;