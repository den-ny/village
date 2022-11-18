// ---------- Dependencies ----------

require("dotenv").config();
const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser');
const PostRouter = require('./controllers/posts');
const UserRouter = require('./controllers/users');

// ---------- Short-hand Variables ----------

const app = express();
const port = process.env.PORT || 5000;

// ---------- Middleware ----------

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors({
  origin: 'http://localhost:5000',
}));

// ---------- Routers ----------

app.use("/posts", PostRouter)

app.use("/users", UserRouter)

// ---------- Server Listener ----------

app.listen(port, (req,res) => {
  console.log(`Express is listening on port ${port}!`);
});

/////////////////////////////////////////