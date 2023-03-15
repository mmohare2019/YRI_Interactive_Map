import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const partnerHandler = require("../../event-handler/partnerHandler");

const Partner = (props) => (
    <tr>
        <td>{props.partner.name}</td>
        <td>{props.partner.address}</td>
        <td>{props.partner.description}</td>
        <td>
            <button className="edit"
                onClick={() => {
                    props.editPartner(props.partner._id);
                }}
            >
                Edit  
            </button>
        </td>
        <td>
            <button className="delete"
                onClick={() => {
                    props.deletePartner(props.partner._id);
                }}
            >
                Delete
            </button>
        </td>
    </tr>
);

export default function Partners() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        
        async function getPartners() {
            const response = await fetch(`http://localhost:5000/partner`);

            console.log(response.data);
            
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
        window.alert("Are you sure you want to permanently delete this community partner?\nClick ok to continue");
        await partnerHandler.deletePartner(id);
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
                <Header/> 
                <h1 className="title">Active Community Partners</h1>  
                <Link to="/partner" className="btn btn-primary"> Add a new partner</Link> 
                
            </div>    

            <Table striped bordered hover>
                <thead className="title">
                    <tr className="text">
                        <th>Name</th>
                        <th>Address</th>
                        <th>Description</th>
                        <th>Edit partner</th>
                        <th>Delete partner</th>
                    </tr>
                </thead>
                <tbody>{partnerList()}</tbody>
            </Table>
        </div>
    );
    
}