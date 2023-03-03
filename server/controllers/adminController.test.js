const adminDao = require("../models/adminDao")
const app = require("../app")
const supertest = require("supertest")
const request = supertest(app)

describe("Tests for login", () => {
    test("success case", async () => {
        const admin = new adminDao.adminModel({
            firstname: "joe",
            lastname: "goob",
            email: "joe@joe.com",
            phoneNumber: "443-456-4213",
            hashedPassword: "goobergoober"
        })

        adminDao.authenticateAdmin = async () => {
            return admin
        }

        // shouldn't actually matter since we overwrote authenticate
        var body = {
            email: "shouldn't matter",
            password: "also shouldn't matter",
        }

        const res = await request
        .post("/admin/login")
        .send(body)
        .then(function(res) {
            expect(res.status).toBe(200)
        })
    })
})

describe("Tests for signup", () => {
    test("admin not logged in", async () => {
        await request
        .post("/admin")
        .then(function(res) {
            expect(res.status).toBe(401)
        })
    })

   /* test("success case", async () => {
        const customApp = app
            .use("/admin", (req, res, next) => {
                req.session.user = "goober"
                next()
            })

        const customRequest = supertest(customApp)

        await customRequest
        .post("/admin")
        .then(function(res) {
            expect(res.status).toBe(201)
        })
    })*/
})