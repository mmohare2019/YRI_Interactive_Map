import axios from "axios"

// Purpose: viewer submits a message form on front-end
export const submitPartner = async (name, address, description, category) => {
    var body = JSON.stringify({
        name: name, 
        address: address,
        description: description,
        category: category
    })

    console.log("body in submit", body)

    var response = await axios.post("/partner", body, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response;
}

// Delete partner 
export const deletePartner = async(_id) => {
    var body = JSON.stringify({
        _id: _id
    });

    console.log(body)

    var response = await axios.post("/partner/delete", body, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response;
}

// Edit partner
export const editPartner = async(_id) => {
    var body = JSON.stringify({
        _id: _id
    });

    console.log(body)

    var response = await axios.post("/partner/edit", body, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response;
} 