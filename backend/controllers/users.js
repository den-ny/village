// ---------- Dependencies ----------

const express = require("express");
const User = require("../models/user");

// ---------- Create User Router ----------

const router = express.Router();

// ---------- Middleware ----------


// ---------- Event Router ----------

//Index Route
router.get("/", async (req, res) => {
  try {
    const data = await User.find({})
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
});

//Show Route
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const data = await User.findOne({ _id: id });
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
});

//Create Route
router.post('/', async (req, res) => {

  const data = new User({
    Username: req.body.username,
    Password: req.body.password,
    Karma: req.body.karma
  })

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// ---------- Export Router ----------

module.exports = router;

///////////////////////////////////////