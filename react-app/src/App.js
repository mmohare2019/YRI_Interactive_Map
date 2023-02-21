import './App.css'
import Home from "./view/screen/Home"
import MessageForm from "./view/screen/MessageForm"
import { BrowserRouter as Router, Switch, Link, Route, Routes } from 'react-router-dom'
import AdminLogin from "./view/screen/AdminLogin"
import AdminSignUp from "./view/screen/AdminSignUp"
import Header from './view/components/Header'


function App() {
  return (
    //<MessageForm/>
    //<Home />
    //<AdminLogin/>
    //<AdminSignUp/>

    <Router>
      <div>
        <Header/>

        <Link to="/login"> Login </Link>

        <Routes>
          <Route path="/login" exact component={AdminLogin}/>
        </Routes>

      </div>
    </Router>

  
  );
}

export default App;
