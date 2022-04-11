import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

//Import the pages

import Form from "./Components/Form/Form"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"

import "./App.css"

function App() {
  return (
      <div className="App">
        <Router>
          <div className="list">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="form">Form</Link></li>
              <li><Link to="login">Login</Link></li>
              <li><Link to="register">Register</Link></li>
            </ul>
          </div>
          <Routes>
            <Route exact path="/" element={<h1>Home Page</h1>} />
            <Route exact path="form" element={<Form />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;