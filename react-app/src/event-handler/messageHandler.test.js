import axios from "axios"
const messageHandler = require("./messageHandler")

jest.mock('axios')

describe("submit message tests", () => {
    test("success case", async () => {
        axios.post.mockResolvedValue({
            status: 301
        })

        const response = await messageHandler.submitMessage("title", "description")
        expect(response.status).toBe(301)
    })
})