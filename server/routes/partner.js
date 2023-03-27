var express = require("express");
var router = express.Router();

const partnerController = require("../controllers/partnerController");

// Create location 
router.post("", partnerController.partner_create_post);

// Retrieve location listings 
router.get("", partnerController.partner_get);

// Delete location 
router.post("/delete", partnerController.delete_partner_post);

// Edit location 
router.post("/edit", partnerController.edit_partner_post);

// Get categories
router.get("/category", partnerController.getAll);

// Get a category name
router.get("/name", partnerController.getName);

module.exports = router; 