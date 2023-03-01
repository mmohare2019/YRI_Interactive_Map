import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
//import axios from "axios";

const Message = (props) => (
    <tr>
        <td>{props.message.title}</td>
        <td>{props.message.description}</td>
        <td>
            <button className="delete"
                onClick={() => {
                    props.deleteMessage(props.message._id);
                }}
            >
                Delete
            </button>
        </td>
    </tr>
);

export default function Inbox() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        
        async function getMessages() {
            const response = await fetch(`http://localhost:5000/inbox`);

            console.log(response.data);
            //console.log(response);
            
            if (!response.ok) {
                const msg = `An error occured: ${response.statusText}`;
                window.alert(msg);
                return;
            }
            
            const messages = await response.json();
            console.log(messages);
            setMessages(messages);
        }

        getMessages();
        return;
    }, [messages.length]);
    

    // Delete a message 
    async function deleteMessage(id) {
        // axios call and send the id 
        window.alert("Are you sure you want to delete this message?\nClick ok to continue");
    }

    // Map the messages on the table 
    function messageList() {
        return messages.map((message => {
            return (
                <Message
                    message={message}
                    deleteMessage={() => deleteMessage(message._id)}
                    key={message._id}
                />
            )
        }))
    }

    // Display the messages and all the details 
    return (
        <div>
            <div>
                <Header/> 
                <h1 className="title">Message Inbox</h1>           
            </div>    

            <Table striped bordered hover>
                <thead className="title">
                    <tr className="text">
                        <th>Title</th>
                        <th>Description</th>
                        <th>Delete message</th>
                    </tr>
                </thead>
                <tbody>{messageList()}</tbody>
            </Table>
        </div>
    );
    
}