import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default class AdminLogin extends React.Component {
    render() {
        return (<>
            <Header/>

            <h1 class="title"> Admin Login </h1> 

            <div class="centered-div">
                <form class="centered-form">
                    <label for="email">Email </label> <br/>
                    <input type="email" id="email" name="email"/>

                    <br/>

                    <label for="password">Password </label> <br/>
                    <input type="password" id="password" name="password"/>

                    <br/>

                    <input type="button" value="Login"/>
                </form>
            </div>

            <Footer/>
        </>)
    }
}