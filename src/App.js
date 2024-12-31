import './App.css';
import EditPortfolio from './pages/Dashboard.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';

function App() {
  return (  
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/login" element = {<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
