import axios from "axios"
const categoryHandler = require("./categoryHandler")

jest.mock('axios')

describe("submit new category test", () => {
    test("success case", async () => {
        axios.post.mockResolvedValue({
            status: 200
        })

        const response = await categoryHandler.submitAddCategoryForm("name", "color")
        expect(response.status).toBe(200)
    })
});

describe("handle get all test", () => {
    test("success case", async () => {
        axios.get.mockResolvedValue({
            status: 200
        })

        const response = await categoryHandler.handleGetAll()
        expect(response.status).toBe(200)
    })
});
