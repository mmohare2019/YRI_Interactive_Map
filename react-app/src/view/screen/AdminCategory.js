// screen for admins to manage categories

import AdminHeader from "../components/AdminHeader"
import {Navigate} from "react-router-dom"
import {Table, Card, Button} from "react-bootstrap"
import React from "react"
//import Popup from 'reactjs-popup'
//import 'reactjs-popup/dist/index.css';
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
        console.log("edit category", _id);  
        
        return (
            <Navigate to={"/edit-category/" + _id}/>
        )

        /*
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
        */
        
    }

    async deleteCategory(_id) {

        const response = window.confirm("Are you sure you want to permanently delete this category?\nClick ok to continue");

        if (response) {
            try {
                var res = await categoryHandler.handleDelete(_id)
                console.log(res.status)
                console.log(res.data)
                
                this.getCategories()
            } catch(error) {
                console.log(error)
            }        
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
            var i = 0; 
            var elements = this.state.categories.map((cat) => {
                i++;
                return(
                    <tr key={cat._id}>
                    <td>{i}</td>
                    <td>
                        <i 
                            className="bi bi-trash"
                            onClick={() => this.deleteCategory(cat._id)}
                        />
                    </td>
                    <td>
                        <i className="bi bi-pencil-square"
                            //onClick={() => this.editCategory(cat._id)} 
                            onClick={() => this.editCategory(cat._id)}       
                        />
                    </td>
                    <td>{cat.name}</td>
                    <td style={{backgroundColor: cat.color, width: "50px", height: "50px"}}></td>
                    <td><img src={'/category/' + cat._id} alt={cat.name} width="50" height="50"/></td>                    
                </tr>  
                )
            })
        }


        /*

            <Popup trigger={<button> Pop up</button>} position="right center">
            <div>Popup content here !!</div>
            <button>Click here</button>
            </Popup>

        */
        console.log(elements.length, "elements length")

        return (<>
            <AdminHeader/>

            <h1 className="title"> Partner Categories </h1>

            <Card className="m-5 p-5" style={{borderWidth: "3px"}}>
                <div className="mb-2">
                    <Button data-testid="submit" className="ml-5" variant="outline-primary" size="md" onClick={this.addCategory}>
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