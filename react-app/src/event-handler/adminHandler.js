import axios from "axios"

export const submitSignUp = async (firstname, lastname, email, phone, password) => {
    var body = JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        password: password
    })

    axios.post("/admin", body, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(response) {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}
