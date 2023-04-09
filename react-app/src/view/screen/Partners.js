import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import Table from 'react-bootstrap/Table';

const partnerHandler = require("../../event-handler/partnerHandler");
//const categoryHandler = require("../../event-handler/categoryHandler")

/*
async function getName(_id) {
    var name = await categoryHandler.getName(_id);
    return name;
}
*/

// Edit category to display name, not MongoDB string 
const Partner = (props) => (
    <tr>
        <td>
            <i className="bi bi-pencil-square"
                onClick={() => {
                    props.editPartner(props.partner._id);
                }}
            ></i>
        </td>
        <td>
            <i className="bi bi-trash"
                onClick={() => {
                    props.deletePartner(props.partner._id);
                }}
            ></i>
        </td>
        <td>{props.partner.name}</td>
        <td>{props.partner.address}</td>
        <td>{props.partner.category}</td>
        <td>{props.partner.description}</td>
        <td>{props.partner.links}</td>
    </tr>
);

export default function Partners() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        
        async function getPartners() {
            const response = await fetch(`http://localhost:5000/partner`);

            console.log("Get partners from fetch: ", response.data);
            
            if (!response.ok) {
                const msg = `An error occured: ${response.statusText}`;
                window.alert(msg);
                return;
            }
            
            const partners = await response.json();
            console.log(partners);
            setPartners(partners);
            
        }

        getPartners();
        return;
    }, [partners.length]);
    
    // Edit a community partner 
    async function editPartner(id) {
        console.log("Edit me!")
        // redirect to a form??
        await partnerHandler.editPartner(id); 
        window.alert("Please fix me to redirect to a form :( ");
    }

    // Delete a community partner 
    async function deletePartner(id) {
        const response = window.confirm("Are you sure you want to delete this?\nClick ok to continue");

        if (response) {
            await partnerHandler.deletePartner(id);
            alert("Location removed!");
            window.location.reload();
        } 
    }

    // Map the community partners on the table 
    function partnerList() {
        return partners.map((partner => {
            return (
                <Partner
                    partner={partner}
                    editPartner={() => editPartner(partner._id)}
                    deletePartner={() => deletePartner(partner._id)}
                    key={partner._id}
                />
            )
        }))
    }

    // Display the messages and all the details 
    return (
        <div>
            <div> 
                <AdminHeader/> 
                <h1 className="title">Active Community Partners</h1>  
                <Link to="/partner" className="btn btn-primary"> Add a new partner</Link> 
            </div>    

            <Table striped bordered hover>
                <thead className="title">
                    <tr className="text">
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Links</th>
                    </tr>
                </thead>
                <tbody>{partnerList()}</tbody>
            </Table>
        </div>
    );
    
}