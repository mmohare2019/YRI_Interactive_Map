var express = require("express")
var router = express.Router()

const adminController = require("../controllers/adminController")

router.post("", adminController.createAdmin)

module.exports = router