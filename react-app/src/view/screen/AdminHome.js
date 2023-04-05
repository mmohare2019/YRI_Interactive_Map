import React from "react"
import Header from "../components/Header";
import Button from 'react-bootstrap/Button';

const adminHandler = require("../../event-handler/adminHandler")

export default class AdminHome extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmitMessages = this.onSubmitMessages.bind(this);
        this.onSubmitPartners = this.onSubmitPartners.bind(this);
        this.onSubmitCategories = this.onSubmitCategories.bind(this);
    }

    async onSubmitMessages() {
        window.location.replace("/inbox");
    }

    async onSubmitPartners () {
        window.location.replace("/partners");
    }

    async onSubmitCategories() {
        window.location.replace("/category");
    }

    render() {  
        return (
            <div>
                <Header/>            

                <h1 className="title">
                    York Road Initiative Interactive Map Admin Home
                </h1>

                <div className="container">
                    <div className="d-grid gap-2">
                        <Button variant="light" size="lg" onClick={this.onSubmitMessages}>
                            Manage messages
                        </Button>
                        <Button variant="light" size="lg" onClick={this.onSubmitPartners}>
                            Manage community partners 
                        </Button>
                        <Button variant="light" size="lg" onClick={this.onSubmitCategories}>
                            Manage partner location categories
                        </Button>
                        <Button variant="secondary" size="lg" onClick={adminHandler.logout}>
                            Logout
                        </Button>
                    </div>
                </div>

            </div>
      
        );
    }
}