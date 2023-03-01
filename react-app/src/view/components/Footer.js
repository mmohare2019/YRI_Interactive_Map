import React from "react";
import "../screen/Home.css"
import { Link } from "react-router-dom";


//<div>Submit a request</div>
function Footer() {
    return (
        <div className="footer">
            <Link to="/message"> Submit a request</Link>
        </div>
    );
}

export default Footer