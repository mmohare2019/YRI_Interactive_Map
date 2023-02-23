const dbcon = require("./dbConnection")
const adminDao = require("./adminDao")

beforeAll(function() {
    dbcon.connect(); 
});

describe("Test for creating admin", () => {
    var FIRST = "Goober"
    var LAST = "Goobstonion"
    var PASSWORD = "i am a goober"
    var EMAIL = "goober@goob.com"
    var PHONE = "123-456-7890"

    test("success case", async function () {
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
    })
})
