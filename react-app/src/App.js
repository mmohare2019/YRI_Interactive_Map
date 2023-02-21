import './App.css'
import Home from "./view/screen/Home"
import MessageForm from "./view/screen/MessageForm"
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import AdminLogin from "./view/screen/AdminLogin"
import AdminSignUp from "./view/screen/AdminSignUp"

function App() {
  return (
    //<MessageForm/>
    //<Home />
    //<AdminLogin/>
    <AdminSignUp/>
  );
}

export default App;
