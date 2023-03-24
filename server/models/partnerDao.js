const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// @TODO: edit partner, check required fields, change image types
const PartnerSchema = new Schema({
    name : {type: String, required: true},
    address : {type: String, required: true},
    category : {type: String, required: false},
    description : {type: String, required: false},
    logo : {type: String, required: false},
    images : {type: String, required: false},
    links: {type: String, required: false}
});

const partnerModel = mongoose.model("Partner", PartnerSchema);

// Create a new community partner 
exports.create = async function(newPartner) {
    console.log("Partner in model", newPartner);
    const partner = new partnerModel(newPartner);
    const createdPartner = await partner.save(); 
    return createdPartner;
}

// Fetch all partners 
exports.partners = async function() {
    let partners = await partnerModel.find(); 
    return partners;
}

// Edit existing community partner 


// Delete existing community partner 
exports.deletePartner = async function(_id) {
    await partnerModel.deleteOne({_id: _id});
}

// Look up an existing community partner by id (for delete testing)
exports.findPartner = async function(_id) {
    let partner = await partnerModel.findById(_id);
    return partner; 
}