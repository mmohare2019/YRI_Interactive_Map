var express = require("express")
var router = express.Router()

const adminController = require("../controllers/adminController")

router.post("", adminController.authSession, adminController.createAdmin)
router.post("/login", adminController.login)

module.exports = router