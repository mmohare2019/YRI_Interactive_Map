var express = require("express")
var router = express.Router()

const adminController = require("../controllers/adminController")

router.post("", adminController.create_admin)

module.exports = router