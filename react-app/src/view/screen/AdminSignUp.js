import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const adminHandler = require("../../event-handler/adminHandler")

export default class AdminSignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",

            errfirstname: "",
            errlastname: "",
            erremail: "",
            errphone: "",
            errpassword: "",
            errconfirmPassword:"",

            errsubmit: "",
        }
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validateConfirmPassword = this.validateConfirmPassword.bind(this)
    }

    // validatation for first and last names (just cant be empty)
    validateName(event) {
        var value = event.target.value
        var errName = "err" + event.target.name

        if(value === "") {
            this.setState({
                [errName]: "Name cannot be empty.",
            })
        }
        else {
            this.setState({
                [errName]: "",
            })
        }
    }

    validateEmail(event) {
        var value = event.target.value
        var errName = "err" + event.target.name

        var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(value.match(validRegex)) {
            this.setState({
                [errName]: "",
            })
        }
        else {
            this.setState({
                [errName]: "Enter a valid email address."
            })
        }
    }

    validatePhoneNumber(event) {
        var value = event.target.value
        var errName = "err" + event.target.name

        var validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

        if(value.match(validRegex)) {
            this.setState({
                [errName]: ""
            })
        }
        else {
            this.setState({
                [errName]: "Enter a valid phone number."
            })
        }
    }

    validatePassword(event) {
        var value = event.target.value
        var errName = "err" + event.target.name

        if(value.length >= 8) {
            this.setState({
                [errName]: "",
            })
        }
        else {
            this.setState({
                [errName]: "Must be >= 8 characters."
            })
        }
    }

    validateConfirmPassword(event) {
        var value = event.target.value
        var errName = "err" + event.target.name
        var errMsg = ""

        if(this.state.password !== value) {
            errMsg = "Passwords must match."
        }
        
        this.setState({
            [errName]: errMsg
        })
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    areInputErrors() {
        return (!(this.state.errfirstname === "" && this.state.errlastname === "" &&
            this.state.erremail === "" && this.state.errphone === "" &&
            this.state.errpassword === "" && this.state.errconfirmPassword === "")
        )
    }

    async handleSubmit(event) {
        // check no errors currently
        if(this.areInputErrors()) {
            this.setState({
                errsubmit: "Fix invalid fields."
            })

            return 
        }

        await adminHandler.submitSignUp(
            this.state.firstname,
            this.state.lastname,
            this.state.email,
            this.state.phone,
            this.state.password
        )
        event.preventDefault()

        // route to map somewhere
    }
    
    render() {
        return (<>
            <Header/>

            <h1 class="title"> Admin Sign Up </h1> 

            <div class="centered-div">
                <form class="centered-form">
                    <label>First name </label> <br/>
                    <input type="text" name="firstname" value={this.state.firstname} 
                        onChange={e => {this.handleChange(e); this.validateName(e)}}/>
                    { 
                        this.state.errfirstname !== "" &&
                        <label className="form-error-msg"> <br/> {this.state.errfirstname} </label>
                    }
                    <br/>

                    <label>Last name </label> <br/>
                    <input type="text" name="lastname" value={this.state.lastname} 
                        onChange={e => {this.handleChange(e); this.validateName(e)}}/>
                    { 
                        this.state.errlastname !== "" &&
                        <label className="form-error-msg"> <br/> {this.state.errlastname} </label>
                    }
                    <br/>

                    <label>Email </label> <br/>
                    <input type="email" name="email" value={this.state.email} 
                        onChange={e => {this.handleChange(e); this.validateEmail(e)}}/>
                    { 
                        this.state.erremail !== "" &&
                        <label className="form-error-msg"><br/>{this.state.erremail}</label>
                    }
                    <br/>

                    <label>Phone </label> <br/>
                    <input type="text" name="phone" value={this.state.phone} 
                        onChange={e => {this.handleChange(e); this.validatePhoneNumber(e)}}/>
                    { 
                        this.state.errphone !== "" &&
                        <label className="form-error-msg"><br/>{this.state.errphone}</label>
                    }
                    <br/>

                    <label>Password </label> <br/>
                    <input type="password" name="password" value={this.state.password} 
                        onChange={e => {this.handleChange(e); this.validatePassword(e)}}/>
                    { 
                        this.state.errpassword !== "" &&
                        <label className="form-error-msg"><br/>{this.state.errpassword}</label>
                    }
                    <br/>

                    <label>Confirm Password </label> <br/>
                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} 
                        onChange={e => {this.handleChange(e); this.validateConfirmPassword(e)}}/>
                    { 
                        this.state.errconfirmPassword !== "" &&
                        <label className="form-error-msg"><br/>{this.state.errconfirmPassword}</label>
                    }
                    <br/>

                    <input type="button" value="Sign Up" name="submit" onClick={this.handleSubmit}/>
                    { 
                        this.state.errsubmit !== "" &&
                        <label className="form-error-msg"><br/>{this.state.errsubmit}</label>
                    }
                </form>
            </div>

            <Footer/>
        </>)
    }
}