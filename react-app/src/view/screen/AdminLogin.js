import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {Navigate} from "react-router-dom"
import Alert from "react-bootstrap/Alert"
 
const adminHandler = require("../../event-handler/adminHandler")

export default class AdminLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",

            error: "",
            success: "",

            toAdminPortal: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    async handleSubmit(event) {
        var errMsg = ""

        try {
            var res = await adminHandler.submitLogin(this.state.email, this.state.password)

            // display if worked / redirect
            console.log(res)
            if(res.status === 200) {
                this.setState({
                    error: "",
                    success: "Logged in!",
                    toAdminPortal: true,
                })
                return
            }
            else {
                errMsg = res.body.error
            }
        }    
        catch(error) {
            switch(error.request.status) {
                case 500: errMsg = "No response from server."
                    break
                case 401: errMsg = "Login incorrect."
                    break
                default: errMsg = error.message
            }
        }

        this.setState({
            error: errMsg
        })

        event.preventDefault()
    }

    render() {
        if(this.state.toAdminPortal) {
            return (<>
                {/*<Alert variant="success">Logged in successfully!</Alert>*/}
                <Navigate to="/admin"/>
            </>)
        }

        return (<>
            <Header/>

            <h1 className="title"> Admin Login </h1> 

            <div className="centered-div">
                <form className="centered-form">
                    <label>Email </label> <br/>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>

                    <br/>

                    <label>Password </label> <br/>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>

                    <br/>

                    <input type="button" value="Login" onClick={this.handleSubmit}/>

                    <br/>

                    {this.state.error !== "" &&
                        <label className="form-error-msg"> {this.state.error} </label>
                    }

                    {this.state.success !== "" &&
                        <label className="form-success-msg"> {this.state.success} </label>
                    }
                </form>
            </div>

            <Footer/>
        </>)
    }
}