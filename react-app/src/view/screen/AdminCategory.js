// screen for admins to manage categories
import React from "react"
import AdminHeader from "../components/AdminHeader"
import {Navigate} from "react-router-dom"
import {Table, Card, Button} from "react-bootstrap"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
const categoryHandler = require("../../event-handler/categoryHandler")

export default class AdminCategory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toAddCategoryForm: false,
            toEditCategoryForm: false, 
            categories: [],
            errMsg: ""
        }

        this.addCategory = this.addCategory.bind(this)
        this.getCategories = this.getCategories.bind(this)
        this.deleteCategory = this.deleteCategory.bind(this)
        this.editCategory = this.editCategory.bind(this)
    }

    addCategory() {
        this.setState({
            toAddCategoryForm: true,
        })
    }

    async editCategory(_id) {        
        this.setState({
            toEditCategoryForm: true,
        });

        try {
            var res = await categoryHandler.editCategory(_id)
            console.log(res.status)
            console.log(res.data)
            this.getCategories()
        } catch(error) {
            console.log(error)
        }
        
    }

    async deleteCategory(_id) {
        try {
            var res = await categoryHandler.handleDelete(_id)
            console.log(res.status)
            console.log(res.data)
            
            this.getCategories()
        } catch(error) {
            console.log(error)
        }
    }

    async getCategories() {
        try {
            var res = await categoryHandler.handleGetAll()
            this.setState({
                categories: Object.values(res.data)
            })
        } catch(error) {
            console.log(error)
            this.setState({
                errMsg: error.message
            })
        }
    }

    componentDidMount() {
        this.getCategories()
    }

    render() {
        if(this.state.toAddCategoryForm) {
            return (
                <Navigate to="/add-category"/>
            )
        }

        if(this.state.toEditCategoryForm) {
            return (
                <Navigate to="/edit-category" />
            )
        }

        if (this.state.categories !== []) {
            var elements = this.state.categories.map((cat) => {
                return(
                    <tr key={cat._id}>
                    <td>{0}</td>
                    <td>
                        <i 
                            className="bi bi-trash"
                            onClick={() => this.deleteCategory(cat._id)}
                        />
                    </td>
                    <td>
                        <i className="bi bi-pencil-square"
                            onClick={() => this.editCategory(cat._id)} 
                        />
                    </td>
                    <td>{cat.name}</td>
                    <td style={{backgroundColor: cat.color, width: "50px", height: "50px"}}></td>
                    <td>{cat.icon}</td>
                </tr>  
                )
            })
        }

        console.log(elements.length, "elements length")

        return (<>
            <AdminHeader/>

            <h1 className="title"> Partner Categories </h1>

            <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Popup content here !!</div>
            <button>Click here</button>
            </Popup>

            <Card className="m-5 p-5" style={{borderWidth: "3px"}}>
                <div className="mb-2">
                    <Button className="ml-5" variant="outline-primary" size="md" onClick={this.addCategory}>
                        Add Category
                    </Button>
                </div>

                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Delete</th>
                                <th>Edit</th>
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