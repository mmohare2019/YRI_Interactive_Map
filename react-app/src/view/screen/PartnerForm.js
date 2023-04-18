import React from "react";
import AdminHeader from "../components/AdminHeader";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import { Navigate } from "react-router-dom";
import axios from "axios";

const partnerHandler = require("../../event-handler/partnerHandler");

export default class PartnerForm extends React.Component {
    constructor() {
        super();

        this.state = {
            toPartners: false,
            categories: [],
            redirectToReferrer: false
        };

        console.log("this.state", this.state);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Getting category data 
    componentDidMount() {
        axios.get("/partner/category")
            .then(res => {
                console.log("from get", res.data);
                this.setState({
                    categories: res.data
                })
            })
    }

    // Setting test input 
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Submitting the form 
    async handleSubmit(e) {
        e.preventDefault()

        // let response = 
        await partnerHandler.submitPartner(
            this.state.name,
            this.state.address,
            this.state.description,
            this.state.links,
            this.state.category
        )
        this.setState({toPartners: true, redirectToReferrer: true})
    }

    render() {
        let redirectToReferrer = this.state.redirectToReferrer;
       
        return (
            <div>
                {redirectToReferrer && (
                    <Navigate to="/partners" replace={true} />
                )}
                <AdminHeader/>
                <h1 className="title"> Add a New Community Partner </h1>
                <div className="title"> Fill out information about a community partner to add them </div>      

                <br></br>

                <Form onSubmit={this.handleSubmit} className="container">
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
                        <Form.Control as="textarea" rows={3} type="text" name="description" value={this.state.description} placeholder="Description" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="links">
                        <Form.Label>Website URL</Form.Label>
                        <Form.Control data-testid="link" type="url" name="links" value={this.state.links} placeholder="Website URL " onChange={this.handleChange}/>
                    </Form.Group>
                    
                    <Form.Select name="category" onChange={this.handleChange}>
                        <option>Choose a category</option>
                        {this.state.categories.map(category => 
                            <option value={category._id}>{category.name}</option>)}
                    </Form.Select>

                    <div className="text-center">
                        <Button variant="primary" type="submit" data-testid="submit">
                            Submit
                        </Button>
                    </div>
                   
                </Form>
            </div>
           
        );
    }
}