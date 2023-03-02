const dbcon = require("./dbConnection")
const adminDao = require("./adminDao")

beforeAll(function() {
    dbcon.connect(); 
});

// email uniqueness still not working
describe("Tests for creating admin", () => {
    var FIRST = "Goober"
    var LAST = "Goobstonion"
    var PASSWORD = "i am a goober"
    var EMAIL = "goober@goob.com"
    var PHONE = "123-456-7890"

    // should not produce any errors
    test("success case", async () => {
        let newAdmin = {
            firstname: FIRST,
            lastname: LAST,
            email: EMAIL,
            password: PASSWORD,
            phoneNumber: PHONE,
        }
    
        let createdAdmin = await adminDao.create(newAdmin)
        
        expect(createdAdmin.firstname).toBe(FIRST)
        expect(createdAdmin.lastname).toBe(LAST)
        expect(adminDao.passwordMatchesHash(PASSWORD, createdAdmin.hashedPassword)).toBe(true)
        expect(createdAdmin.email).toBe(EMAIL)
        expect(createdAdmin.phoneNumber).toBe(PHONE)

        await createdAdmin.deleteOne()
    })

    test("email already taken", async () => {
        let newAdmin = {
            firstname: FIRST,
            lastname: LAST,
            email: EMAIL,
            password: PASSWORD,
            phoneNumber: PHONE,
        }

        let createdAdmin = await adminDao.create(newAdmin)
        
        try {
            await adminDao.create(newAdmin)
            fail("error should have been throw when email already taken")
        }
        catch {}

        await createdAdmin.deleteOne({ _id: createdAdmin._id })
    })

    // should throw an error
    test("first and last name empty strings", async function () {
        let newAdmin = {
            firstname: "",
            lastname: "",
            email: EMAIL,
            password: PASSWORD,
            phoneNumber: PHONE,
        }

        return expect(async () => await adminDao.create(newAdmin)).rejects.toThrow()
    })

    // should throw an error
    test("syntacically invalid email", async function () {
        let newAdmin = {
            firstname: FIRST,
            lastname: FIRST,
            email: "bademail#",
            password: PASSWORD,
            phoneNumber: PHONE,
        }

        return expect(async () => await adminDao.create(newAdmin)).rejects.toThrow()
    })

    test("invalid phone number", async function () {
        let newAdmin = {
            firstname: FIRST,
            lastname: LAST,
            email: EMAIL,
            password: PASSWORD,
            phoneNumber: "443-jsak-4j23",
        }

        return expect(async () => await adminDao.create(newAdmin)).rejects.toThrow()
    })

    test("password doesn't meet length requirement", async function() {
        let newAdmin = {
            firstname: FIRST,
            lastname: LAST,
            email: EMAIL,
            password: "short",
            phoneNumber: PHONE,
        }

        return expect(async () => await adminDao.create(newAdmin)).rejects.toThrow()
    })
})

describe("Tests for admin authentication", () => {
    test("success case", async () => {
        var newAdmin = {
            firstname: "goober",
            lastname: "gooberston",
            email: "test@test.com",
            phoneNumber: "555-456-3456",
            password: "testpassworddoesntmatter"
        }

        const createdAdmin = await adminDao.create(newAdmin)

        try {
            var adminFound = await adminDao.authenticateAdmin(createdAdmin.email, newAdmin.password)
            expect(JSON.stringify(adminFound) === JSON.stringify(createdAdmin))
            await createdAdmin.deleteOne()
        }
        catch(error) {
            await createdAdmin.deleteOne()
            throw new Error(error)
        }
    })

    test("account doesn't exist", async () => {
        var newAdmin = {
            firstname: "goober",
            lastname: "gooberston",
            email: "test@test.com",
            phoneNumber: "555-456-3456",
            password: "testpassworddoesntmatter"
        }

        return expect(async () => await adminDao.authenticateAdmin(newAdmin.email, newAdmin.password)).rejects.toThrow()
    })
})
