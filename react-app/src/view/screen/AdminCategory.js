// screen for admins to manage categories

import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Table from "react-bootstrap/Table"
import {Navigate} from "react-router-dom"
const categoryHandler = require("../../event-handler/categoryHandler")

export default class AdminCategory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toAddCategoryForm: false,
            data: {}
        }

        this.addCategory = this.addCategory.bind(this)
        this.getData = this.getData.bind(this)
    }

    addCategory() {
        this.setState({
            toAddCategoryForm: true,
        })
    }

    async getData() {
        try {
            var data = await categoryHandler.handleGetAll()
            this.setState({
                data: data
            })
        } catch(error) {
            console.log(error)
            return error
        }
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        if(this.state.toAddCategoryForm) {
            return (
                <Navigate to="/add-category"/>
            )
        }

        console.log(this.state.data)

        return (<>
            <Header/>

            <h1 className="title"> Partner Categories </h1>

            <div className="centered-div">
                <input type="button" value="Add Category" onClick={this.addCategory}/>
                
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Icon</th>
                        </tr>
                    </thead>
                </Table>
            </div>

            <Footer/>
        </>)
    }
}