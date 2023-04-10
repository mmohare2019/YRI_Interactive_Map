//const util = require("util")
const axios = require("axios")
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// @TODO: edit partner, check required fields, change image types
const PartnerSchema = new Schema({
    name : {type: String, required: true},
    address : {type: String, required: true},
    lat: {type: Number, required: true},
    lon: {type: Number, required: true},
    category : {type: String, required: false},
    description : {type: String, required: false},
    logo : {type: String, required: false},
    images : {type: String, required: false},
    links: {type: String, required: false}
});

const partnerModel = mongoose.model("Partner", PartnerSchema);

const addressToLatLon = async(address) => {
    axios.get("https://nominatim.openstreetmap.org/search?format=json&q=" + address)
    .then((response) => {
        coordinates = {
            lat: response.data[0].lat,
            lon: response.data[0].lon
        }
        return coordinates
    })
    .catch((error) => {
        console.log(error)
    })
}

// Create a new community partner 
exports.create = async function(newPartner) {
    const res = 
        await axios.get("https://nominatim.openstreetmap.org/search?format=json&q=" + newPartner.address)

    newPartner.lat = res.data[0].lat,
    newPartner.lon = res.data[0].lon

    const partner = new partnerModel(newPartner);
    const created = await partner.save()
    return created

    /*
    // convert address to lat lon then save
    axios.get("https://nominatim.openstreetmap.org/search?format=json&q=" + newPartner.address)
    .then(async(response) => {
        newPartner.lat = response.data[0].lat,
        newPartner.lon = response.data[0].lon

        const partner = new partnerModel(newPartner);
        const created = await partner.save()
        return created
    })
    .catch((error) => {
        console.log(error)
    })
    */
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
    let partner = await partnerModel.findById({_id: _id});
    return partner; 
}