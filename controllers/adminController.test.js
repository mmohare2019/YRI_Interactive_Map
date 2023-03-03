const adminDao = require("../models/adminDao")
const app = require("../app")
const supertest = require("supertest")
const request = supertest(app)

describe("Tests for login", () => {
    test("success case", async () => {
        adminDao.authenticateAdmin = async () => {
            return (new adminDao.adminModel({
                firstname: "joe",
                lastname: "goob",
                email: "joe@joe.com",
                phoneNumber: "443-456-4213",
                hashedPassword: "goobergoober"
            }))
        }

        // shouldn't actually matter since we overwrote authenticate
        var body = {
            email: "shouldn't matter",
            password: "also shouldn't matter",
        }

        const res = await request
        .post("/admin/login")
        .send(body)

        expect(res.status).toBe(200)
    })
})