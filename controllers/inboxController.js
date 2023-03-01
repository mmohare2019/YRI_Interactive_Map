const Message = require("../models/messageDao");
const { body, validationResult } = require("express-validator");

// View inbox 
exports.inbox_get = [
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        
        Message.inbox().then(function (result) {
            res.json(result);
        }).catch((error) => {
            res.status(400).json({error: error});
        });
    },
];

// Delete message 