// pop-up form for adding categories
import React from "react"
import {Navigate} from "react-router-dom"
import Form from 'react-bootstrap/Form'; 
import { Button } from "react-bootstrap";
//import axios from "axios"
import AdminHeader from "./AdminHeader";
const categoryHandler = require("../../event-handler/categoryHandler")

export default class EditCategoryForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            color: "#000000",
            errMsg: "",
            backToCategoryScreen: false,
            categories: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    // Getting category data 
    componentDidMount() {
        /*
        axios.get("/partner/category")
            .then(res => {
                console.log("from get", res.data);
                this.setState({
                    categories: res.data
                })
            })
        */
    }

    async handleSubmit() {
        var errMsg = ""
        var backToCategoryScreen= false

        if(this.state.name === "") {
            errMsg = "Name cannot be empty"
        } else {
           await categoryHandler.submitEditCategoryForm(
                this.state.category,
                this.state.name, 
                this.state.color
            )
                
            backToCategoryScreen = true
        }

        this.setState({
            errMsg: errMsg,
            backToCategoryScreen: backToCategoryScreen
        })
    }

    render() {
        if(this.state.backToCategoryScreen) {
            return (
                <Navigate to="/category"/>
            )
        }

        /*
            <Form.Select name="category" onChange={this.handleChange}>
                    <option>Select a category to edit</option>
                    {this.state.categories.map(category => 
                        <option value={category._id}>{category.name}</option>)}
            </Form.Select>
        */
       
        return(<>
            <AdminHeader/>

            <h1 className="title"> Edit Category </h1> 

            <Form onSubmit={this.handleSubmit} className="container">

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.name} placeholder="Enter name" onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Color</Form.Label>
                    <Form.Control type="color" name="name" value={this.state.color} onChange={this.handleChange}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                {this.state.errMsg !== "" && 
                    <label className="form-error-msg">
                        {this.state.errMsg}
                    </label>
                }

                </Form>
        </>)
    }
}