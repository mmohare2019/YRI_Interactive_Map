import axios from "axios"

// Purpose: viewer submits a message form on front-end
export const submitPartner = async (name, address, description, links, category) => {
    var body = JSON.stringify({
        name: name, 
        address: address,
        description: description,
        links: links,
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

// 4/18/2023 (Joe) --> I wasn't sure if editPartner() was 
// used anywhere and didn't want to break anything, so I just 
// made a new function for updating a partner
export const updatePartner = async(partner) => {
    var res = await axios.post("/partner/edit", partner, {
        "Content-Type": "application/json"
    })

    return res
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