// pop-up form for adding categories
import React from "react"
import {Navigate} from "react-router-dom"
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';
import AdminHeader from "./AdminHeader"
const categoryHandler = require("../../event-handler/categoryHandler")

export default class AddCategoryForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            categoryName: "",
            color: "#000000",
            icon: "",
            iconFile: "",
            errMsg: "",
            backToCategoryScreen: false
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

    async handleSubmit(e) {
        e.preventDefault()

        console.log(this.state.categoryName)
        console.log(this.state.color)
        console.log(this.state.iconFile.name)

        var errMsg = ""
        var backToCategoryScreen= false

        if(this.state.name === "") {
            errMsg = "Name cannot be empty"
        } else {
            try {
                var response = await categoryHandler.submitAddCategoryForm(
                    this.state.categoryName, this.state.color, this.state.iconFile)
            
                if(response.status === 201) {
                    backToCategoryScreen = true
                } else {
                    errMsg = "Category name already exists"
                }
            }
            catch(error) {
                errMsg = "Category name already exists"
            }
        }

        this.setState({
            errMsg: errMsg,
            backToCategoryScreen: backToCategoryScreen
        })
    }

    render() {
        let backToCategoryScreen = this.state.backToCategoryScreen

        return(<>
            {backToCategoryScreen && (
                <Navigate to="/category" replace={true} />
            )}

            <AdminHeader/>

            <h1 className="title"> Add Category </h1> 

            <Form onSubmit={this.handleSubmit} className="container">
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control data-testid="name" type="text" name="categoryName" value={this.state.categoryName} placeholder="Enter name" onChange={this.handleChange}/>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="color">                       
                    <Form.Label>Color</Form.Label>
                    <Form.Control data-testid="color" type="color" name="color" value={this.state.color} onChange={this.handleChange}/>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Icon</Form.Label>
                    <Form.Control 
                        type="file" 
                        accept="image/*" 
                        filename={this.state.icon} 
                        onChange={e => this.setState({"iconFile": e.target.files[0]})}/>
                </Form.Group>
                    
                <div className="text-center">
                    <Button variant="primary" type="submit" data-testid="submit">
                        Submit
                    </Button>
                </div>


                {this.state.errMsg !== "" && 
                    <label className="form-error-msg">
                        {this.state.errMsg}
                    </label>
                }
            </Form>
        </>)
    }
}