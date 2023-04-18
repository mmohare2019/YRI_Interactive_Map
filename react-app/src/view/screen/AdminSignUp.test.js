import React from "react"
import { fireEvent, screen, render} from "@testing-library/react"
import AdminSignUp from "./AdminSignUp"
const adminHandler = require("../../event-handler/adminHandler")


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
        

        /*
        render(<AdminSignUp/>)
        const firstnameInput = screen.getAllByTestId("firstname");
        fireEvent.change(firstnameInput, {target: {value: "joe"}});
        
        const lastnameInput = screen.getAllByTestId("lastname");
        fireEvent.change(lastnameInput, {target: {value: "luhrman"}});

        const emailInput = screen.getByPlaceholderText("email");
        fireEvent.change(emailInput, {target: {value: "email@email.com"}});

        const phoneInput = screen.getByPlaceholderText("phone");
        fireEvent.change(phoneInput, {target: {value: "978100100"}});

        const passwordInput = screen.getByTestId("password");
        fireEvent.change(passwordInput, {target: {value: "password123"}})

        const confirmPasswordInput = screen.getByTestId("confirmPassword");
        fireEvent.change(confirmPasswordInput, {target: {value: "password123"}})

        const submitInput = screen.getByTestId("submit")

        adminHandler.submitSignUp = async () => {
            return {
                status: 201
            }
        }
            
        fireEvent.click(submitInput)
        */
    })
})
