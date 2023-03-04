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
