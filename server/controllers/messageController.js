const Message = require("../models/messageDao");
const { body, validationResult } = require("express-validator");
var async = require("async");

// Create message 
exports.message_create_post = [
    // validation 
    //body("email", "Email is required").trim().isLength({min: 1}).escape(),
    //body("password", "Password is required").trim().isLength({min: 6}).escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        Message.create(req.body.title, req.body.description).then(function (result) {
            res.json(result);
        }).catch((error) => {
            res.status(400).json({error: error.array()});
        });
    },
];