const {validationResult} = require("express-validator")
const categoryDao = require("../models/categoryDao")

// Make a new category 
exports.createCategory = (req, res) => {
    let category = {
        name: req.body.name,
        color: req.body.color,
        icon: req.file.buffer,
        mimetype: req.file.mimetype
    }
    
    const errs = validationResult(req)
    if (!errs.isEmpty()) {
        return res.status(400).json({
            error: errs.array()
        }).send()
    }

    categoryDao.create(category)
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

// Get all of the categories 
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

// Get category names 
exports.getName = (req, res) => {
    const errs = validationResult(req)
    if (!errs.isEmpty()) {
        return res.status(400).json({
            error: errs.array()
        }).send()
    }

    console.log("in controller", req.body);
    categoryDao.getName(req.body._id)
    .then(function(result) {
        return res.status(200).json(result)
    })
    .catch((error) => {
        return res.status(400).json({error: error})
    })
}

// Fetch icon image from database
exports.getIcon = (req, res) => {
    const errs = validationResult(req)
    if (!errs.isEmpty()) {
        return res.status(400).json({
            error: errs.array()
        }).send()
    }

    categoryDao.getIcon(req.params.id)
    .then(function(result) {
        res.set('Content-Type', result.mimetype)
        return res.send(result.icon)
    })
    .catch((error) => {
        return res.status(400).json({error: error})
    })
}
