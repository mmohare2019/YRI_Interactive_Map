import React from "react"
import './Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <nav class="navigation-bar">
                    <img class="logo" src="ccsjLogo.jpg" alt="CCSJ logo"/>  
                </nav>

                <h2 class="title">
                    York Road Initiative Interactive Map  
                </h2>
            </div>
      
        );
    }
}