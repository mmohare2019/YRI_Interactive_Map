var express = require("express");
var router = express.Router();

const inboxController = require("../controllers/inboxController");

// Retrieve inbox 
router.post("", inboxController.inbox_get);

// Delete message 

// Delete inbox 

module.exports = router; 