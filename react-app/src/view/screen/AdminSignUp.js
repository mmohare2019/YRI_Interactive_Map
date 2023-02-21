import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default class AdminSignUp extends React.Component {
    render() {
        return (<>
            <Header/>

            <h1 class="title"> Admin Sign Up </h1> 

            <div class="centered-div">
                <form class="centered-form">
                    <label for="firstname">First name </label> <br/>
                    <input type="text" id="firstname" name="firstname"/>
                    <br/>

                    <label for="lastname">Last name </label> <br/>
                    <input type="text" id="lastname" name="lastname"/>
                    <br/>

                    <label for="email">Email </label> <br/>
                    <input type="email" id="email" name="email"/>
                    <br/>

                    <label for="password">Password </label> <br/>
                    <input type="password" id="password" name="password"/>
                    <br/>

                    <label for="password">Confirm Password </label> <br/>
                    <input type="password" id="confirmPassword" name="confirmPassword"/>
                    <br/>

                    <input type="button" value="Sign Up"/>
                </form>
            </div>

            <Footer/>
        </>)
    }
}