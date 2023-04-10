const express = require("express")
const router = express.Router()
const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

const categoryController = require("../controllers/categoryController")
const adminController = require("../controllers/adminController")

router.use(adminController.authSession)

router.post("", upload.single('icon'), categoryController.createCategory)
router.get("", categoryController.getAll)
router.get("/:id", categoryController.getIcon)
router.delete("/:id", categoryController.delete)

module.exports = router