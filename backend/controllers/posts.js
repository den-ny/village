// ---------- Dependencies ----------

const express = require("express");
const Post = require("../models/post");

// ---------- Create Post Router ----------

const app = express();
const router = express.Router();

// ---------- Middleware ----------


// ---------- Event Router ----------

//Index Route
router.get("/", async (req, res) => {
  try {
    const data = await Post.find({})
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
});

//Show Route
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Post.findOne({ _id: id });
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
});

//Create Route
router.post('/', async (req, res) => {

  console.log(req.body)

  const data = new Post({
    OwnerID: req.body.ownerid,
    Image: req.body.image,
    Title: req.body.title,
    Description: req.body.description
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