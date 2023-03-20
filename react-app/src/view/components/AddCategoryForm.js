// pop-up form for adding categories
import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {Navigate} from "react-router-dom"
const categoryHandler = require("../../event-handler/categoryHandler")

export default class AddCategoryForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            color: "#000000",
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

    async handleSubmit() {
        console.log(this.state.name)
        console.log(this.state.color)

        var errMsg = ""
        var backToCategoryScreen= false

        if(this.state.name === "") {
            errMsg = "Name cannot be empty"
        } else {
            try {
                var response = await categoryHandler.submitAddCategoryForm(
                    this.state.name, this.state.color)
            
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
        if(this.state.backToCategoryScreen) {
            return (
                <Navigate to="/category"/>
            )
        }

        return(<>
            <Header/>

            <h1 className="title"> Add Category </h1> 

            <div className="centered-div">
                <form className="centered-form">
                    <label>Name</label> <br/>
                    <input id="name" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

                    <br/>

                    <label>Color</label> <br/>
                    <input id="color" type="color" name="color" value={this.state.color} onChange={this.handleChange}/>

                    <br/>

                    <input id="submit" type="button" value="Add Category" onClick={this.handleSubmit}/>
                    <br/>

                    {this.state.errMsg !== "" && 
                        <label className="form-error-msg">
                            {this.state.errMsg}
                        </label>
                    }

                    <br/>
                </form>
            </div>

            <Footer/>
        </>)
    }
}