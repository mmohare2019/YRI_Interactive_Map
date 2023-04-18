import React from "react"
import {
    Button,
    Container,
    Form,
} from "react-bootstrap"
import {
    useNavigate,
    useLocation 
} from "react-router-dom"
import AdminHeader from "../components/AdminHeader"
import { handleGetAll } from "../../event-handler/categoryHandler"
import { updatePartner } from "../../event-handler/partnerHandler"

export default function UpdatePartnerForm() {
    const { state } = useLocation()
    const { partner } = state

    const [formValue, setFormValue] = React.useState(partner)
    const [categories, setCategories] = React.useState()

    const navigate = useNavigate()

    React.useEffect(() => {
        const getCategories = async() => {
            var res = await handleGetAll()
            setCategories(res.data)
        }

        getCategories()
    }, [])

    const handleChange = (event) => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value });
    }

    const handleSubmit = async(event) => {
        event.preventDefault()

        try {
            const res = await updatePartner(formValue)
            if(res.status === 200) {
                navigate("/partners")
            }
        } catch(error) {
            alert(error)
        }
    }

    return (<>
        <AdminHeader/>
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="name" 
                        value={formValue.name} 
                        placeholder="Enter name" 
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="address" 
                        value={formValue.address} 
                        placeholder="Address" 
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        type="text" 
                        name="description" 
                        value={formValue.description} 
                        placeholder="Description" 
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="links">
                    <Form.Label>Website URL</Form.Label>
                    <Form.Control 
                        type="url" 
                        name="links" 
                        value={formValue.links} 
                        placeholder="Website URL" 
                        onChange={handleChange}/>
                </Form.Group>
                
                {categories !== undefined &&
                <Form.Select name="category" onChange={handleChange}>
                    <option>Choose a category</option>
                    {
                        categories.map(category => 
                        <option value={category._id}>{category.name}</option>)
                    }
                </Form.Select>   
                }

                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </div>       
            </Form>
        </Container>
    </>)
}