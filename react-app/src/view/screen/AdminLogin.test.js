import AdminLogin from "./AdminLogin"
import {screen, fireEvent, render, act} from "@testing-library/react"
import {waitFor} from "@testing-library/react"
const adminHandler = require("../../event-handler/adminHandler")
import axios from "axios"

//describe("login screen tests", () => {
    test("full render smoke test", () => {
        const result = render(<AdminLogin/>) 

        const emailInput = result.container.querySelector("#email")
        fireEvent.change(emailInput, {target: {value: "jaluhrman@comcast.net"}})

        const passwordInput = result.container.querySelector("#password")
        fireEvent.change(passwordInput, {target: {value: "goofygoofygoober"}})

        const submitInput = result.container.querySelector("#submit")

        adminHandler.submitLogin = async(email, password) => {
            return {
                status: 200
            }
        } 
        
        fireEvent.click(submitInput)
    })

    test("submit failure rednder smoke test", () => {
        const result = render(<AdminLogin/>)   

        const emailInput = result.container.querySelector("#email")
        fireEvent.change(emailInput, {target: {value: "jaluhrman@comcast.net"}})

        const passwordInput = result.container.querySelector("#password")
        fireEvent.change(passwordInput, {target: {value: "goofygoofygoober"}})

        const submitInput = result.container.querySelector("#submit")

        adminHandler.submitLogin = async(email, password) => {
            await axios.get("return 500 for the love of god")
        } 
        
        fireEvent.click(submitInput)
    })
//})