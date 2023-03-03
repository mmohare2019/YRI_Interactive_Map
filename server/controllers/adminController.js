// handlers for admin endpoints
const { body, validationResult } = require("express-validator");

const adminDao = require("../models/adminDao")

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
        res.status(400).json({error: err})
    })
}

exports.login = (req, res) => {
    const errs = validationResult(req)
    if (!errs.isEmpty()) {
        console.log(errs) // remove
        return res.status(400).json({
            error: errs.array()
        })
    }

    try {
        var adminFound = adminDao.authenticateAdmin(req.body.email, reg.body.password)
        adminFound.hashedPassword = null
        req.session.user = adminFound
        return res.status(200)
    }
    catch(error) {
        return res.status(401).json({
            error: error
        })
    }
}

exports.authSession = async(req, res, next) => {
    if(!(req.session.user)) {
        res.status(401).send()
        return
    }

    next()
}
