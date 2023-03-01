// handlers for admin endpoints
const { body, validationResult } = require("express-validator");

const adminDao = require("../models/adminDao")

// should add middleware for user/session authentication
exports.createAdmin = (req, res) => {
        const errs = validationResult(req)
        if (!errs.isEmpty()) {
            console.log(errs) // remove
            return res.status(400).json({
                error: errs.array()
            })
        }

        adminDao.create(req.body).then(function (result) {
            res.status(201).json(result)
        }).catch((err) => {
            res.status(400).json({err: err})
        })
    }
