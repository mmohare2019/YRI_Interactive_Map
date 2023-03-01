import React from "react"
import './Home.css';
import Header from "../components/Header";
import { Link } from "react-router-dom";

// Adjust header to have the logout button 
export default class AdminPortal extends React.Component {
    render() {  
        return (
            <div>
                <Header/>            

                <h1 class="title">
                    York Road Initiative Interactive Map Admin Home
                </h1>

                <div>
                    <Link to="/inbox">Manage messages</Link> <br></br>
                    <Link to="/partner">Manage community partners</Link> <br></br>
                    <Link to="/category">Manage community partner categories</Link>
                </div>

            </div>
      
        );
    }
}