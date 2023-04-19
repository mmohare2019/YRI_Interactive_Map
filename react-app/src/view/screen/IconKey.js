// screen for admins to manage categories
import Header from "../components/Header"
import {Table, Card} from "react-bootstrap"
import React from "react"
const categoryHandler = require("../../event-handler/categoryHandler")

export default class IconKey extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            categories: [],
            errMsg: ""
        }

        this.getCategories = this.getCategories.bind(this)
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
        if (this.state.categories !== []) {
            var elements = this.state.categories.map((cat) => {
                return(
                    <tr key={cat._id}>
                    <td>{cat.name}</td>
                    <td style={{backgroundColor: cat.color, width: "50px", height: "50px"}}></td>
                    <td><img src={'/category/' + cat._id} alt={cat.name} width="50" height="50"/></td>                    
                </tr>  
                )
            })
        }
        
        console.log(elements.length, "elements length")

        return (<>
            <Header/>

            <h1 className="title"> Category Key </h1>

            <Card className="m-5 p-5" style={{borderWidth: "3px"}}>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
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