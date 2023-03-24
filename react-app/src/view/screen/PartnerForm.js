import React from "react";
import Header from "../components/Header";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 

const partnerHandler = require("../../event-handler/partnerHandler");

const options = [
    {
        label: "apple",
        value: "123",
    }, 
    {
        label: "banana",
        value: "345",
    },
];

export default class PartnerForm extends React.Component {
    constructor() {
        super();

        this.state = {
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit() {
        console.log("state in handle submit", this.state);

        await partnerHandler.submitPartner(
            this.state.name,
            this.state.address,
            this.state.description,
            this.state.category
        )
        //event.preventDefault()
  
      window.alert("Your community partner has been added!");
    }

    render() {
        // const { items } = this.state;

        return (
            <div>
                <Header/>
                <h1 className="title"> Add a New Community Partner </h1>
                <div className="title"> Fill out information about a community partner to add them </div>      

                <br></br>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name} placeholder="Enter name" onChange={this.handleChange}/>
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" value={this.state.address} placeholder="Address" onChange={this.handleChange}/>
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} placeholder="Description" onChange={this.handleChange}/>
                    </Form.Group>
                    
                    <Form.Select name="category" onChange={this.handleChange}>
                        {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </Form.Select>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
           
        );
    }
}