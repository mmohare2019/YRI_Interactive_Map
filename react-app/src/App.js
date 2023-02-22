import './App.css'
import Home from "./view/screen/Home"
import MessageForm from "./view/screen/MessageForm"
import { Link, Route, Routes } from 'react-router-dom'
import AdminLogin from "./view/screen/AdminLogin"
import AdminSignUp from "./view/screen/AdminSignUp"
import Header from './view/components/Header'


function App() {
  return (
    // Fix the format 
    <>
      <nav>
        <ul>
          <li><Link to="/message">Message Form</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/message" element={<MessageForm/>}/>
        <Route path="/login" element={<AdminLogin/>}/>
      </Routes>

    </>

   

  
  );
}

export default App;
