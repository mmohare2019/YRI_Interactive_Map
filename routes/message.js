var express = require("express");
var router = express.Router();

const messageController = require("../controllers/messageController");

// Create message 
router.post("", messageController.message_create_post);

// Retrieve inbox 
router.post("/inbox", messageController.inbox_get);

// Delete message 

// Delete inbox 

module.exports = router; 