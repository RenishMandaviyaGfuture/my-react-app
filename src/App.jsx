import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Router> 
        <Routes>   
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={
            <h1 className="text-primary">Welcome to the App</h1>            
          }/>
          </Routes>
      </Router>
    </>
  );
};

export default App;
