const categoryDao = require("./categoryDao")
const dbcon = require("./dbConnection")

beforeAll(function() {
    dbcon.connect(); 
});

describe("create category tests", () => {
    test("success case", async () => {
        var newCat = {
            name: "test category",
            color: "#42f5b0" // greenish
        }

        const createdCategory = await categoryDao.create(newCat)

        expect(createdCategory.name).toBe(newCat.name)
        expect(createdCategory.color).toBe(newCat.color)

        await createdCategory.deleteOne()
    })

    test("invalid color", async () => {
        var newCat = {
            name: "test category",
            color: "#i45ois3"
        }

        expect(async () => await categoryDao.create(newCat)).rejects.toThrow()
    })

    test("no name", async () => {
        var newCat = {
            color: "#42f5b0" // greenish
        }

        expect(async () => await categoryDao.create(newCat)).rejects.toThrow()
    })
})