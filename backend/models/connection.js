//Dependencies
require("dotenv").config();
const mongoose = require('mongoose');

//Shorthand for Connection arguments
const DATABASE_URL = process.env.MONGODB;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//Create Connection Object
mongoose.connect(DATABASE_URL, CONFIG);

//Connection Events & Callbacks
const db = mongoose.connection;

db.once("open", () => console.log("Connected to MongoDB"))
db.on("close", () => console.log("Connection to MongoDB closed"))
db.on("error", (error) => console.log(error));

//Export Connection
module.exports = mongoose;