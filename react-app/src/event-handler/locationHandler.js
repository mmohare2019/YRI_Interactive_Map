import axios from "axios"

// Purpose: viewer submits a message form on front-end
export const submitPartner = async (name, address, description) => {
    var body = JSON.stringify({
        name: name, 
        address: address,
        description: description
    })

    console.log(body)

    var response = await axios.post("/location", body, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response;
}