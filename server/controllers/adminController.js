// handlers for admin endpoints

const adminDao = require("../models/adminDao")

// should add middleware for user/session authentication
exports.create_admin = [
    (req, res, next) => {
        const errs = validationResult(req)
        if (!errs.isEmpty()) {
            return res.status(400).json({
                error: errors.array()
            })
        }

        adminDao.create(req.body).then(function (result) {
            res.json(result)
        }).catch((err) => {
            res.status(400).json({err: err.array()})
        })
    }
]