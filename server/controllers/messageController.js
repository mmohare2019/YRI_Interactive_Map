const Message = require("../models/messageDao");
const { body, validationResult } = require("express-validator");
//var async = require("async");

// Create message 
exports.message_create_post = [

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        console.log(req.body);
        
        Message.create(req.body).then(function (result) {
            res.json(result);
        }).catch((error) => {
            res.status(400).json({error: error});
        });
    },
];