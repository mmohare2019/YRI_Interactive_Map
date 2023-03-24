import React from "react"
import './Home.css'
import Footer from "../components/Footer"
import Header from "../components/Header"
import Map from "../components/Map"
import { Card } from "react-bootstrap"

export default class Home extends React.Component {
    render() {  
        return (
            <div>
                <Header/>            

                <h1 className="title">
                    York Road Initiative Interactive Map  
                </h1>

                <Map/>
                
                <Footer/>
            </div>
      
        );
    }
}