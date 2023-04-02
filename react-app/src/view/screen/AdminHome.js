import React from "react"
import Header from "../components/Header";

const adminHandler = require("../../event-handler/adminHandler")

export default class AdminHome extends React.Component {
    render() {  
        return (
            <div>
                <Header/>            

                <h1 className="title">
                    York Road Initiative Interactive Map Admin Home
                </h1>

                <div>
                    <ul>
                        <li>
                            <a href="http://localhost:3000/inbox">Manage messages</a>
                        </li>
                        <li>  
                            <a href="http://localhost:3000/partners">Manage community partners</a>
                        </li>
                        <li>   
                            <a href="http://localhost:3000/category">Manage community partner categories</a>
                        </li>

                        <button onClick={adminHandler.logout}>
                            Logout
                        </button>
                    </ul>
                </div>

            </div>
      
        );
    }
}