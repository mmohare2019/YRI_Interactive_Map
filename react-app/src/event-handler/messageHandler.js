import axios from "axios"

// Purpose: viewer submits a message form on front-end
export const submitMessage = async (title, description) => {
    var body = JSON.stringify({
        title: title,
        description: description
    })

    console.log(body)

    axios.post("/message", body, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(response) {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}