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

export { submitAddCategoryForm }