const express = require('express')
const router = express.Router();
const userController = require('../controllers/users')

router.get("/");
router.post("/", userController.createUser);
router.put("/");
router.delete("/");

module.exports = router;