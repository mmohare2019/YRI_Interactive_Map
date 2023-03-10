import axios from "axios"

export const submitSignUp = async (firstname, lastname, email, phone, password) => {
    var body = JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phoneNumber: phone,
        password: password
    })

    var response =  await axios.post("/admin", body, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response
}

export const submitLogin = async (email, password) => {
    var body = JSON.stringify({
        email: email,
        password: password,
    })

    var response =  await axios.post("/admin/login", body, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response
}

export const logout = async() => {
    var response = await axios
    .post("/admin/logout")

    console.log(response.status)
    return response
}