import React from "react";
//import './Home.css';
import Header from "../components/Header";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <h1 class="title"> Submit a Request </h1>
                <div class="title"> If you believe there is an error with the current map such as a need for address update, 
                please contact the website's administration team using the form below! </div>      

                <br></br>
                
                <form>
                    <label for="title">Title: </label>
                    <input type="text" id="title" name="title"></input><br></br>
                    <label for="description">Description: </label>
                    <input type="text" id="description" name="description"></input><br></br>
                    <input type="submit" value="Submit"></input>
                </form>        
            </div>
        );
    }
}