import {render, fireEvent} from "@testing-library/react"
import AdminSignUp from "./AdminSignUp"
const adminHandler = require("../../event-handler/adminHandler")
import React from "react"

describe("AdminSignUp render tests", () => {
    test("full render smoke test", () => {
        const result = render(<AdminSignUp/>)

        const emailInput = result.container.querySelector("#email")
        fireEvent.change(emailInput, {target: {value: "jaluhrman@comcast.net"}})

        const passwordInput = result.container.querySelector("#password")
        fireEvent.change(passwordInput, {target: {value: "goofygoofygoober"}})

        const firstnameInput = result.container.querySelector("#firstname")
        fireEvent.change(firstnameInput, {target: {value: "joe"}})
        
        const lastnameInput = result.container.querySelector("#lastname")
        fireEvent.change(lastnameInput, {target: {value: "luhrman"}})

        const phoneInput = result.container.querySelector("#phone")
        fireEvent.change(phoneInput, {target: {value: "443-765-0366"}})

        const confirmInput = result.container.querySelector("#confirmPassword")
        fireEvent.change(confirmInput, {target: {value: "goofygoofygoober"}})

        const submitInput = result.container.querySelector("#submit")
        
        adminHandler.submitSignUp = async () => {
            return {
                status: 201
            }
        }
        
        fireEvent.click(submitInput)
    })
})
