import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const inboxHandler = require("../../event-handler/inboxHandler");

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
        window.alert("Are you sure you want to permanently delete this message?\nClick ok to continue");
        await inboxHandler.deleteMessage(id);
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

    // Clear all messages from the inbox 
    function clearInbox() {
        console.log("hello world");
        window.alert("Are you sure you want to permanently delete all these messages\nPress ok to continue");
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

            <button className="delete"
                onClick={() => {
                    clearInbox();
                }}
            >
                Delete all messages
            </button>
        </div>
    );
    
}