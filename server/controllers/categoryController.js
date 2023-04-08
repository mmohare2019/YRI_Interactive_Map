const {validationResult} = require("express-validator")
const categoryDao = require("../models/categoryDao")

exports.createCategory = (req, res) => {
    const errs = validationResult(req)
    if (!errs.isEmpty()) {
        return res.status(400).json({
            error: errs.array()
        }).send()
    }

    categoryDao.create(req.body)
    .then(function(result) {
        res.status(201).json(result).send()
    })
    .catch((err) => {
        res.status(400).json({error: err}).send()
    })
}


// get category id from url params
exports.delete = (req, res) => {
    const errs = validationResult(req)
    if (!errs.isEmpty()) {
        return res.status(400).json({
            error: errs.array()
        }).send()
    }

    console.log("URL PARAM:, " + req.params.id)

    categoryDao.delete(req.params.id)
    .then(function(result) {
        res.status(200).json(result).send()
    })
    .catch((err) => {
        res.status(400).json({error: err}).send()
    })
}

exports.getAll = (req, res) => {
    const errs = validationResult(req)
    if (!errs.isEmpty()) {
        return res.status(400).json({
            error: errs.array()
        }).send()
    }

    categoryDao.getAll()
    .then(function(result) {
        return res.status(200).json(result)
    })
    .catch((error) => {
        return res.status(400).json({error: error})
    })
}