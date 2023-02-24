// handlers for admin endpoints
const { body, validationResult } = require("express-validator");

const adminDao = require("../models/adminDao")

// should add middleware for user/session authentication
exports.createAdmin = (req, res) => {
        console.log("we've made it")

        const errs = validationResult(req)
        if (!errs.isEmpty()) {
            console.log(errs) // remove
            return res.status(400).json({
                error: errs.array()
            })
        }

        adminDao.create(req.body).then(function (result) {
            res.json(result)
        }).catch((err) => {
            console.log(err) // remove
            res.status(400).json({err: err})
        })
    }
