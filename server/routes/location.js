var express = require("express");
var router = express.Router();

const messageController = require("../controllers/messageController");
const locationController = require("../controllers/locationController");

// Create location 
router.post("", locationController.location_create_post);

// Retrieve location listings 

// Delete location 

// Edit location 

module.exports = router; 