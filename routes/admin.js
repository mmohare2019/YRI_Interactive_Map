var express = require("express")
var router = express.Router()

const adminController = require("../controllers/adminController")

router.post("", adminController.createAdmin)
router.post("/login", adminController.login)

module.exports = router