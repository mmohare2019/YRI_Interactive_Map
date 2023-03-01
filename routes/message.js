var express = require("express");
var router = express.Router();

const messageController = require("../controllers/messageController");

// Create message 
router.post("", messageController.message_create_post);

module.exports = router; 