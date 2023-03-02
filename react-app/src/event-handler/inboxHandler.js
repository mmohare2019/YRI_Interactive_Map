import axios from "axios";

export const deleteMessage = async(_id) => {
    var body = JSON.stringify({
        _id: _id
    });

    console.log(body)

    axios.post("/inbox/delete", body, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(response) {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}