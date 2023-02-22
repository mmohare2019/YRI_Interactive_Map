import React from "react";
import Header from "../components/Header";
import { Form, Button } from 'react-bootstrap';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <h1 class="title"> Submit a Request </h1>
                <div class="title"> If you believe there is an error with the current map such as a need for address update, 
                please contact the website's administration team using the form below! </div>      

                <br></br>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                       
            </div>
        );
    }
}