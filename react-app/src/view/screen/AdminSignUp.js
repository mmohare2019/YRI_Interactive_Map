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
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async handleSubmit(event) {
        // check password matches confirm password

        await adminHandler.submitSignUp(
            this.state.firstname,
            this.state.lastname,
            this.state.email,
            this.state.phone,
            this.state.password
        )
        event.preventDefault()
    }
    
    render() {
        return (<>
            <Header/>

            <h1 class="title"> Admin Sign Up </h1> 

            <div class="centered-div">
                <form class="centered-form">
                    <label>First name </label> <br/>
                    <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
                    <br/>

                    <label>Last name </label> <br/>
                    <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                    <br/>

                    <label>Email </label> <br/>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    <br/>

                    <label>Phone </label> <br/>
                    <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                    <br/>

                    <label>Password </label> <br/>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <br/>

                    <label>Confirm Password </label> <br/>
                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}/>
                    <br/>

                    <input type="button" value="Sign Up" onClick={this.handleSubmit}/>
                </form>
            </div>

            <Footer/>
        </>)
    }
}