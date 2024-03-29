import React, {useEffect, useState} from "react";
import AdminHeader from "../components/AdminHeader";
import Table from 'react-bootstrap/Table';

const inboxHandler = require("../../event-handler/inboxHandler");

const Message = (props) => (
    <tr>
        <td>{props.message.title}</td>
        <td>{props.message.description}</td>
        <td>
            <i class="bi bi-trash"
                onClick={() => {
                    props.deleteMessage(props.message._id);
                }}
            ></i>   
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
        const response = window.confirm("Are you sure you want to permanently delete this message?\nClick ok to continue");

        if (response) {
            await inboxHandler.deletePartner(id);
            window.location.reload();
        } 
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
    async function clearInbox() {
        window.alert("Are you sure you want to permanently delete all these messages\nPress ok to continue");
        await inboxHandler.clearInbox(); 
    }

    // Display the messages and all the details 
    return (
        <div>
            <div>
                <AdminHeader/> 
                <h1 className="title">Message Inbox</h1>           
            </div>    

            <Table striped bordered hover data-testid="table">
                <thead className="title">
                    <tr className="text">
                        <th>Title</th>
                        <th>Description</th>
                        <th>Delete message</th>
                    </tr>
                </thead>
                <tbody>{messageList()}</tbody>
            </Table>

            <button className="delete" data-testid="submit"
                onClick={() => {
                    clearInbox();
                }}
            >
                Delete all messages
            </button>
        </div>
    );
    
}