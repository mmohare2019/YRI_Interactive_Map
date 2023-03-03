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

exports.login = async (req, res) => {
    const errs = validationResult(req)
    if (!errs.isEmpty()) {
        res.status(400).json({
            error: errs.array()
        })
        return
    }

    try {
        const adminFound = await adminDao.authenticateAdmin(req.body.email, req.body.password)

        adminFound.hashedPassword = null
        req.session.user = adminFound
        
        res.status(200).send()

        return
    }
    catch(error) {
        res.status(401).json({
            error: error.message
        }).send()
        
        return
    }
}

exports.authSession = async(req, res, next) => {
    if(!(req.session.user)) {
        res.status(401).send()
        return
    }

    next()
}
