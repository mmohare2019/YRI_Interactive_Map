// DAO for admin objects

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

// determines whether an email address is syntacically valid
const emailIsValid = async function(email) {
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return email.match(validRegex)
}

const phoneNumIsValid = async function(phoneNum) {
    var validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    return phoneNum.match(validRegex)
}

const passwordMeetsRequirements = (password) => {
    return password.length >= 8
}

const AdminSchema = new Schema({
    firstname : { 
        type: String,
        required: [true, "First name is required"],
        maxLength: 100,
    },
    lastname : { 
        type: String,
        required: [true, "Last name is required"],
        maxLength: 100,
    },
    email : { // make unique
        type: String,
        required: true,
        unique: true,
        validate: [emailIsValid, "Email address is invalid"],
    },
    hashedPassword : {
        type: String,
        required: true
    },
    phoneNumber : { 
        type: String,
        required: true,
        validate: [phoneNumIsValid, "Phone number is invalid"],
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
    if(!passwordMeetsRequirements(newAdmin.password)) {
        throw new Error("Password does not meet requirements")
    }

    // hash password and replace plain text with it
    newAdmin.hashedPassword = hashPassword(newAdmin.password)

    const admin = new adminModel(newAdmin)
    const createdAdmin = await admin.save()
    return createdAdmin
}

exports.authenticateAdmin = async function(email, password) {
    const errStr = "Could not authenticate account."

    const adminFound = await adminModel.findOne({email: email})
    if (adminFound === null) {
        throw new Error(errStr)
    }

    var match = passwordMatchesHash(password, adminFound.hashedPassword)
    if(match) {
        return adminFound
    }
    else {
        throw new Error(errStr)
    }
}