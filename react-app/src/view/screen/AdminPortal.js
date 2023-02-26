import React from "react"
import './Home.css';
import Header from "../components/Header";

// Adjust header to have the logout button 

export default class AdminPortal extends React.Component {
    render() {  
        return (
            <div>
                <Header/>            

                <h1 class="title">
                    York Road Initiative Interactive Map Admin Home
                </h1>

            </div>
      
        );
    }
}