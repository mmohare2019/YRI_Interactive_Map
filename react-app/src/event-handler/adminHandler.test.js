import axios from "axios"
const adminHandler = require("./adminHandler")


jest.mock('axios')

describe("submit sign up tests", () => {
    test("success case", async () => {
        axios.post.mockResolvedValue({
            status: 201
        })

        const response = await adminHandler.submitSignUp("boop", "beep", "bap", "dap", "wap")
        expect(response.status).toBe(201)
    })
})

describe("login tests", () => {
    test("success case", async () => {
        axios.post.mockResolvedValue({
            status: 200
        })

        const response = await adminHandler.submitLogin("boop", "beep")
        expect(response.status).toBe(200)
    })
})

describe("logoout tests", () => {
    test("success case", async () => {
        axios.post.mockResolvedValue({
            status: 301
        })

        const response = await adminHandler.logout()
        expect(response.status).toBe(301)
    })
})