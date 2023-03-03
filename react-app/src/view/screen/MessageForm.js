import React from "react";
//import { Link, Route, useNavigate } from "react-router-dom";
import Header from "../components/Header";
const messageHandler = require("../../event-handler/messageHandler");

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
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
        await messageHandler.submitMessage(
            this.state.title,
            this.state.description
        )
        event.preventDefault()

        window.alert("Your message has been submitted!");
    }

    render() {
        return (
            <div>
                <Header/>
                <h1 class="title"> Submit a Request </h1>
                <div class="title"> If you believe there is an error with the current map such as a need for address update, 
                please contact the website's administration team using the form below! </div>      

                <br></br>
                       
                <div class="centered-div">
                <form class="centered-form">
                    <label>Title </label> <br/>
                    <input type="text" name="title" size="100" value={this.state.title} onChange={this.handleChange}/>
                    <br/>

                    <label>Description </label> <br/>
                    <input type="text" name="description" size="100" value={this.state.description} onChange={this.handleChange}/>
                    <br/>

                    <input type="button" value="Submit" onClick={this.handleSubmit}/>
                </form>
            </div>

            </div>
        );
    }
}