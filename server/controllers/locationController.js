const Partner = require("../models/partnerDao");
const { body, validationResult } = require("express-validator");

// Create partner 
exports.location_create_post = [
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        console.log(req.body);

        Partner.create(req.body).then(function(result) {
            res.json(result);
        }).catch((error) => { 
            res.status(400).json({error: error});
        });
    },
];