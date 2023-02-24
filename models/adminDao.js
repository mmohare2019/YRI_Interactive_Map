// DAO for admin objects

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

const AdminSchema = new Schema({
    firstname : { // add validation to make sure not empty
        type: String,
        required: true,
        maxLength: 100,
    },
    lastname : { // same as above
        type: String,
        required: true,
        maxLength: 100,
    },
    email : { // ADD EMAIL VALIDATION
        type: String,
        required: true,
    },
    hashedPassword : {
        type: String,
        required: true
    },
    phoneNumber : { // ADD PHONE NUMBER VALIDATION
        type: String,
        required: true
    }
})

const adminModel = mongoose.model("Admin", AdminSchema)

const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10)
    var hashedPassword = bcrypt.hashSync(password, salt)
    return hashedPassword
}
exports.hashPassword = hashPassword

const passwordMatchesHash = (plaintext, hash) => {
    return bcrypt.compareSync(plaintext, hash)
}
exports.passwordMatchesHash = passwordMatchesHash

exports.create = async function(newAdmin) {
    // validate password meets requirements

    // hash password and replace plain text with it
    newAdmin.hashedPassword = hashPassword(newAdmin.password)

    const admin = new adminModel(newAdmin)
    const createdAdmin = await admin.save()
    return createdAdmin
}