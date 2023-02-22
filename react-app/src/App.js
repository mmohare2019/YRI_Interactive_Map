import './App.css'
import Home from "./view/screen/Home"
import MessageForm from "./view/screen/MessageForm"
import { Route, Routes } from 'react-router-dom'
import AdminLogin from "./view/screen/AdminLogin"
import AdminSignUp from "./view/screen/AdminSignUp"

function App() {
  return (
    // Fix the format 
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/message" element={<MessageForm/>}/>
        <Route path="/signup" element={<AdminSignUp/>}/>
        <Route path="/login" element={<AdminLogin/>}/>
      </Routes>

    </>

   

  
  );
}

export default App;
