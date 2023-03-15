import axios from "axios"
const locationHandler = require("./locationHandler")

jest.mock('axios')

describe("submit new location test", () => {
    test("success case", async () => {
        axios.post.mockResolvedValue({
            status: 200
        })

        const response = await locationHandler.submitPartner("name", "address", "description")
        expect(response.status).toBe(200)
    })
})