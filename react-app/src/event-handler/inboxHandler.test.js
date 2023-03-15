import axios from "axios"
const inboxHandler = require("./inboxHandler")

jest.mock('axios')

describe("delete message tests", () => {
    test("success case", async () => {
        axios.post.mockResolvedValue({
            status: 201
        })

        const response = await inboxHandler.deleteMessage(123)
        expect(response.status).toBe(201)
    })
})

describe("clear inbox tests", () => {
    test("success case", async () => {
        axios.post.mockResolvedValue({
            status: 200
        })

        const response = await inboxHandler.clearInbox()
        expect(response.status).toBe(200)
    })
})