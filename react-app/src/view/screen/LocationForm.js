import React from "react";
import Header from "../components/Header";
const locationHandler = require("../../event-handler/locationHandler");

export default class LocationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            address: "",
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
        await locationHandler.submitPartner(
            this.state.name,
            this.state.address,
            this.state.description
        )
        event.preventDefault()

        window.alert("Your location has been added!");
    }

    render() {
        return (
            <div>
                <Header/>
                <h1 className="title"> Add Community Partner </h1>
                <div className="title"> Enter details about a community partner for them to be added to the map </div>      

                <br></br>
                       
                <div className="centered-div">
                <form className="centered-form">
                    <label>Name </label> <br/>
                    <input type="text" name="name" size="100" value={this.state.name} onChange={this.handleChange}/>
                    <br/>

                    <label>Address </label> <br/>
                    <input type="text" name="address" size="100" value={this.state.address} onChange={this.handleChange}/>
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