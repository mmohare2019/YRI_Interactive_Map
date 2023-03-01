import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import axios from "axios";
import {Link} from "react-router-dom";
// const messageHandler = require("../../event-handler/messageHandler");

const Message = (props) => (
    <tr>
        <td>{props.message.title}</td>
        <td>{props.message.description}</td>
        
    </tr>
) 
export default function Inbox() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        
        async function getMessages() {
            const response = await axios.post("/inbox");

            if (!response.ok) {
                const msg = `An error occured: ${response.statusText}`;
                window.alert(msg);
                return;
            }

            const messages = await response.json();
            setMessages(messages);
        }

        getMessages();
        return;
    }, [messages.length]);
    

    
    // Delete a message 
    /*
    async function deleteMessage(id) {
        // axios call and send the id 
    }
    */

    // Map the messages on the table 
    function messageList() {
        return messages.map((message => {
            return (
                <Message
                    message={message}
                    //deleteMessage={() => deleteMessage(message._id)}
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
                <h1 class="title">Message Inbox</h1>           
            </div>    

            <table className="table table-striped" style={{marginTop: 20}}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>{messageList()}</tbody>
            </table>
        </div>
    );
    
}