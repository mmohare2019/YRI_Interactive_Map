import React from "react"
import './Home.css';
import Footer from "../components/Footer";
import Header from "../components/Header";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>                

                <h1 class="title">
                    York Road Initiative Interactive Map  
                </h1>

                <Footer/>
            </div>
      
        );
    }
}