import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./view/screen/Home"
import AdminHome from './view/screen/AdminHome'
import MessageForm from "./view/screen/MessageForm"
import AdminLogin from "./view/screen/AdminLogin"
import AdminSignUp from "./view/screen/AdminSignUp"
import Inbox from "./view/screen/Inbox"
import PartnerForm from './view/screen/PartnerForm'
import Partners from './view/screen/Partners'
import AdminCategory from "./view/screen/AdminCategory"
import AddCategoryForm from "./view/components/AddCategoryForm"
import UpdatePartnerForm from './view/screen/UpdatePartnerForm'

function App() {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<AdminHome/>}/>
        <Route path="/message" element={<MessageForm/>}/>
        <Route path="/signup" element={<AdminSignUp/>}/>
        <Route path="/login" element={<AdminLogin/>}/>
        <Route path="/inbox" element={<Inbox/>}/>
        <Route path="/partner" element={<PartnerForm/>}/>
        <Route path="/partners" element={<Partners/>}/>
        <Route path="/category" element={<AdminCategory/>}/>
        <Route path="/add-category" element={<AddCategoryForm/>}/>
        <Route path="/update-partner" element={<UpdatePartnerForm/>}/>
      </Routes>

    </>  
  );
}

export default App;
