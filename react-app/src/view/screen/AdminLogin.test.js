import axios from "axios"
import AdminLogin from "./AdminLogin"
import {screen, fireEvent, render} from "@testing-library/react"
const adminHandler = require("../../event-handler/adminHandler")

//describe("login screen tests", () => {
    test("full render smoke test", () => {
        render(<AdminLogin/>)
        const emailInput = screen.getByTestId("email");
        fireEvent.change(emailInput, {target: {value: "email@email.com"}});
    
        const passwordInput = screen.getByTestId("password");
        fireEvent.change(passwordInput, {target: {value: "password123"}})
    
        const submitInput = screen.getByTestId("submit")

        adminHandler.submitLogin = async(email, password) => {
            return {
                status: 200
            }
        } 
            
        fireEvent.click(submitInput)
    })

    test("submit failure rednder smoke test", () => {
        render(<AdminLogin/>)
        const emailInput = screen.getByTestId("email");
        fireEvent.change(emailInput, {target: {value: "email@email.com"}});
    
        const passwordInput = screen.getByTestId("password");
        fireEvent.change(passwordInput, {target: {value: "password"}})
    
        const submitInput = screen.getByTestId("submit")

        adminHandler.submitLogin = async(email, password) => {
            await axios.get("return 500 for the love of god")
        } 
            
        fireEvent.click(submitInput)
    })
//})