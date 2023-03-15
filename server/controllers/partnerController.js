const Partner = require("../models/partnerDao");
const { body, validationResult } = require("express-validator");

// Create partner 
exports.partner_create_post = [
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

// Retrieve partners 
exports.partner_get = [
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        
        Partner.partners().then(function (result) {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.json(result);
        }).catch((error) => {
            res.status(400).json({error: error});
        });
    },
];

// Delete a partner
exports.delete_partner_post = [
    (req, res) => { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const _id = req.body._id; 
        
        Partner.deletePartner(_id).then(function (result) {
            res.json(result);
        }).catch((error) => {
            res.status(400).json({error: error});
        });
    }
]

// Edit a partner's details 
// @TODO different model to be called here!!!
exports.edit_partner_post = [
    (req, res) => { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const _id = req.body._id; 
        
        Partner.findPartner(_id).then(function (result) {
            res.json(result);
        }).catch((error) => {
            res.status(400).json({error: error});
        });
    }
]