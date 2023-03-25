const categoryDao = require("../models/categoryDao")
const supertest = require("supertest")

const app = require("../app")
const request = supertest(app)

const express = require("express")
const loggedInApp = express().use("/category", (req, res, next) => {
    req.session.user = "test"
    next()
})
loggedInApp.use(app)
const loggedInRequest = supertest(loggedInApp)

describe("tests for create category endpoint", () => {
    test("admin not logged in", async() => {
        await request
        .post("/category")
        .then(function(res) {
            expect(res.status).toBe(401)
        })
    })

    /*
    test("success case", async() => {
        var newCategory = {
            name: "shouldn't matter",
            color: "shouldn't matter"
        }

        await loggedInRequest
        .post("/category")
        .then(function(res) {
            expect(res.status).toBe(201)
        })
    })
    */
    
})  