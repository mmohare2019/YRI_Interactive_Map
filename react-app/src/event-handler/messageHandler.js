import axios from "axios"

// Purpose: viewer submits a message form on front-end
export const submitMessage = async (title, description) => {
    var body = JSON.stringify({
        title: title,
        description: description
    })

    console.log(body)

    var response = await axios.post("/message", body, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response;
}