// screen for admins to manage categories

import React from "react"
import AdminHeader from "../components/AdminHeader"
import {Navigate} from "react-router-dom"
import {Table, Card, Button} from "react-bootstrap"
const categoryHandler = require("../../event-handler/categoryHandler")

export default class AdminCategory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toAddCategoryForm: false,
            toEditCategoryForm: false, 
            data: {},
            errMsg: ""
        }

        this.addCategory = this.addCategory.bind(this)
        this.getData = this.getData.bind(this)
    }

    addCategory() {
        this.setState({
            toAddCategoryForm: true,
        })
    }

    editCategory() {
        this.setState({
            toEditCategoryForm: true,
        })
    }

    async getData() {
        try {
            var res = await categoryHandler.handleGetAll()
            this.setState({
                data: res.data
            })
        } catch(error) {
            console.log(error)
            this.setState({
                errMsg: error.message
            })
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

        if(this.state.toEditCategoryForm) {
            return (
                <Navigate to="/edit-category"/>
            )
        }

        if (this.state.data !== {}) {
            console.log(this.state.data)

            var categories = Object.values(this.state.data)
            console.log("category length: ", categories.length)
            var elements = []
            for (var i = 0; i < categories.length; i++) {
                var cat = categories[i]

                var element = 
                    <tr key={cat._id}>
                        <td>{i + 1}</td>
                        <td>{cat.name}</td>
                        <td style={{backgroundColor: cat.color, width: "50px", height: "50px"}}></td>
                        <td>{cat.icon}</td>
                    </tr>

                elements.push(element)
            }
        }

        console.log(elements.length, "elements length")

        return (<>
            <AdminHeader/>

            <h1 className="title"> Partner Categories </h1>

            <Card className="m-5 p-5" style={{borderWidth: "3px"}}>
                <div className="mb-2">
                    <Button className="ml-5" variant="outline-primary" size="md" onClick={this.addCategory}>
                        Add Category
                    </Button>
                </div>

                <div className="mb-2">
                    <Button className="ml-5" variant="outline-primary" size="md" onClick={this.editCategory}>
                        Edit Category
                    </Button>
                </div>

                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Color</th>
                                <th>Icon</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elements}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        </>)
    }
}