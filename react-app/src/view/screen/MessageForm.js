import React from "react";
import Header from "../components/Header";
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';
const messageHandler = require("../../event-handler/messageHandler");

export default class MessageForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: ""
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

        window.location.reload();
        window.location.replace("http://localhost:3000/");
    }

    render() {
        return (
            <div>
                <Header/>
                <h1 className="title"> Submit a Request </h1>
                <div className="title"> If you believe there is an error with the current map such as a need for address update, 
                please contact the website's administration team using the form below! </div>      

                <br></br>
                       
                <Form onSubmit={this.handleSubmit} className="container">
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} placeholder="Enter title" onChange={this.handleChange}/>
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} type="text" name="description" value={this.state.description} placeholder="Description" onChange={this.handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
        );
    }
}