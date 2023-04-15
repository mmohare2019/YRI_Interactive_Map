const express = require("express")
const router = express.Router()
const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

const categoryController = require("../controllers/categoryController")
const adminController = require("../controllers/adminController")

router.use(adminController.authSession)

// Send icon to DB to be stored 
router.post("", upload.single('icon'), categoryController.createCategory)

// Display all categories in table 
router.get("", categoryController.getAll)

// Get icon to display in table by ID 
router.get("/:id", categoryController.getIcon)

// Delete a category by its idea 
router.delete("/:id", categoryController.delete)

// Edit an existing category by its ID 
router.post("/edit-category", upload.single('icon'), categoryController.editCategory)

module.exports = router