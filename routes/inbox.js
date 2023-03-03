var express = require("express");
var router = express.Router();

const inboxController = require("../controllers/inboxController");

// Retrieve inbox 
router.get("", inboxController.inbox_get);

// Delete message 
router.post("/delete", inboxController.delete_message_post);

// Delete inbox 
router.post("/clear", inboxController.clear_inbox_post);

module.exports = router; 