import React from "react"
import './Home.css';
import { Link } from 'react-router-dom'
import Footer from "../components/Footer";
import Header from "../components/Header";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>                

                <h2 class="title">
                    York Road Initiative Interactive Map  
                </h2>

                <Footer/>
            </div>
      
        );
    }
}