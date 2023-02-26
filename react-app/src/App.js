import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./view/screen/Home"
import AdminPortal from './view/screen/AdminPortal'
import MessageForm from "./view/screen/MessageForm"
import AdminLogin from "./view/screen/AdminLogin"
import AdminSignUp from "./view/screen/AdminSignUp"

function App() {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<AdminPortal/>}/>
        <Route path="/message" element={<MessageForm/>}/>
        <Route path="/signup" element={<AdminSignUp/>}/>
        <Route path="/login" element={<AdminLogin/>}/>
      </Routes>

    </>  
  );
}

export default App;
