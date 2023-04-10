const categoryDao = require("./categoryDao")
const dbcon = require("./dbConnection")

beforeAll(function() {
    dbcon.connect(); 
});

describe("create category tests", () => {
    test("success case", async () => {
        var newCat = {
            name: "test category1",
            color: "#42f5b0", // greenish
            mimetype: "image/jpeg"
        }

        const createdCategory = await categoryDao.create(newCat)

        expect(createdCategory.name).toBe(newCat.name)
        expect(createdCategory.color).toBe(newCat.color)

        await createdCategory.deleteOne()
    })

    test("invalid color", async () => {
        var newCat = {
            name: "test category2",
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

describe("delete category tests", () => {
    test("success case", async() => {
        const newCategory = {
            name: "test category",
            color: "#42f5b0",
            mimetype: "image/jpeg"
        }

        const created = await categoryDao.create(newCategory)
        const count = await categoryDao.delete(created._id)
        
        expect(count.deletedCount).toBe(1)
    })
})

test('get all categories', async function () {
    let cat = {
        name: "test category3",
        color: "#42f5b0", // greenish
        mimetype: "image/jpeg"
    };

    var createdCategory = await categoryDao.create(cat);
    let c = await categoryDao.getAll();
    expect(c).not.toBe(null);
    await createdCategory.deleteOne()
});

test('get name by _id', async function () { 
    let cat = {
        name: "c",
        color: "#42f5b0", // greenish
        mimetype: "image/jpeg"
    };
    
    let created = await categoryDao.create(cat);
    expect(created.name).toBe(cat.name);
    expect(created.color).toBe(created.color);
    
    let name = await categoryDao.getName(created._id);
    console.log(name);
    expect(name).toBe(created.name);
    await created.deleteOne();
});