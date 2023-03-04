import axios from "axios";

// Delete message 
export const deleteMessage = async(_id) => {
    var body = JSON.stringify({
        _id: _id
    });

    console.log(body)

    var response = await axios.post("/inbox/delete", body, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response;
}

// Clear inbox 
