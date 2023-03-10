var express = require("express")
var router = express.Router()

const categoryController = require("../controllers/categoryController")
const adminController = require("../controllers/adminController")

router.use(adminController.authSession)

router.post("", categoryController.createCategory)

module.exports = router