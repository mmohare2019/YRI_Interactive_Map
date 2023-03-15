import axios from "axios"
const partnerHandler = require("./partnerHandler")

jest.mock('axios')

describe("submit new partner test", () => {
    test("success case", async () => {
        axios.post.mockResolvedValue({
            status: 200
        })

        const response = await partnerHandler.submitPartner("name", "address", "description")
        expect(response.status).toBe(200)
    })
})