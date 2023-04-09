import axios from "axios"

const submitAddCategoryForm = async(name, color) => {
    var body = JSON.stringify({
        name: name,
        color: color,
    })
    
    var response =  await axios.post("/category", body, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response
}

const handleDelete = async(_id) => {
    var res = await axios.delete("/category/" + _id)
    return res
}

const editCategory = async(_id) => {
    console.log("_id", _id)
    
    var res = await axios.post("/category/edit-category", _id, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return res
}

const handleGetAll = async() => {
    var response = await axios.get("/category") 
    return response
}

const getName = async(_id) => {
    var resp = await axios.post("/category/name", _id, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return resp 
}

export { handleGetAll, submitAddCategoryForm, handleDelete, editCategory, getName }