import './App.css'
import Home from "./view/screen/Home"
import MessageForm from "./view/screen/MessageForm"
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function App() {
  return (
    <MessageForm/>
    //<Home />
  );
}

export default App;
