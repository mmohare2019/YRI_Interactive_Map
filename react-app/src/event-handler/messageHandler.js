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

// Purpose: admin wants to pull all the messages from the DB to the frontend 
/*
export const viewInbox = async () => {
    axios.get("/inbox")
    .then(function(response) {
        console.log(response.data)
    }).catch((error) => {
        console.log(error)
    })
}
*/

// Purpose: admin wants to delete a single message 

// Purpose: admin wants to delete entire inbox 