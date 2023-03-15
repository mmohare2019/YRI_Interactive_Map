var express = require("express");
var router = express.Router();

const partnerController = require("../controllers/partnerController");

// Create location 
router.post("", partnerController.partner_create_post);

// Retrieve location listings 

// Delete location 

// Edit location 

module.exports = router; 