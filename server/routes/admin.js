var express = require("express")
var router = express.Router()

const adminController = require("../controllers/adminController")

<<<<<<< HEAD
router.post("", adminController.authSession, adminController.createAdmin)
router.post("/login", adminController.login)
=======
router.post("", adminController.createAdmin)
>>>>>>> 0db03e8a91258b0cd8dcc1d9e217b31ee7c143e8

module.exports = router