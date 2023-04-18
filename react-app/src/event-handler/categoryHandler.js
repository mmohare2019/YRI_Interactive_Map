import axios from "axios"

// Handle a new category addition 
const submitAddCategoryForm = async(name, color, icon) => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("color", color);
    formData.append("icon", icon);

    console.log("submit category file", icon);
    
    let response =  await axios.post("/category", formData, 
        { headers: {'Content-Type': 'multipart/form-data'}})

    return response
}

// Handle a deletion of category by its id 
const handleDelete = async(_id) => {
    var res = await axios.delete("/category/" + _id)
    return res
}

// Handle edit of category by id 
const submitEditCategoryForm = async(category, name, color, icon) => {
    let formData = new FormData();
    formData.append("_id", category);
    formData.append("name", name);
    formData.append("color", color);
    formData.append("icon", icon);

    var res = await axios.post("/category/", formData, {
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    })
    return res
}

// Get all of the categories to display on the table 
const handleGetAll = async() => {
    var response = await axios.get("/category") 
    return response
}

// Get a category name by its id
const getName = async(_id) => {
    var resp = await axios.post("/category/name", _id, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return resp 
}

export { handleGetAll, submitAddCategoryForm, handleDelete, submitEditCategoryForm, getName }