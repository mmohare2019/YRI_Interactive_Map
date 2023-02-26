import React from "react"
import './Home.css';
import Header from "../components/Header";

export default class AdminMessage extends React.Component {
    render() {  
        return (
            <div>
                <Header/> 
                <h1>Message Center</h1>           

            </div>
        );
    }
}