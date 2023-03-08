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
        res.status(400).json({error: err})
    })
}