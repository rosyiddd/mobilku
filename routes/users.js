const User = require("../models/User");
const router = require("express").Router();
const upload = require('../multer/multer')
const UserService = require('../services/UserService')

const userService = new UserService

router.post("/create", upload.single("image"), async (req, res) => {
  userService.createUser(req, res)
});

// update
router.put("/:id", upload.single("image"), async (req, res) => {
  userService.updateUser(req, res)
})

//get a user
router.get("/:id", async (req, res) => {
  userService.getUser(req, res)
});

module.exports = router;