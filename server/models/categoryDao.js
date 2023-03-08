const mongoose = require("mongoose")
const Schema = mongoose.Schema

const colorIsValid = (v) => {
    var validRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/
    return v.match(validRegex)
}

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, "Category name is required"],
        maxLength: 100,
    },
    color: {
        type: String,
        validate: [colorIsValid, "Color must be a valid RGB hex value"]
    },
    icon: { // add validation
        data: Buffer,
        contentType: String,
        required: false,
    }
})

const categoryModel = mongoose.model("Category", CategorySchema)
exports.categoryModel = categoryModel

// create new category (without icon)
exports.create = async function(newCategory) {
    const category = new categoryModel(newCategory)
    const created = await category.save()
    return created
}