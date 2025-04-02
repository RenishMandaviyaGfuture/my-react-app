import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('https://api.escuelajs.co/api/v1/users');
      const users = res.data;
      const user = users.find((user) => user.email === email);

      if(user){
          if(password === "password"){
            localStorage.setItem("isLoggedIn","true");
            alert("Login successfull!");
            navigate('/home');
          }
          else{
            alert("Incorrect password");
          }
        }else{
          alert("user not found!");
        }
    } catch (error) {
      alert('An error occurred while logging in.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className='form-label'>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label className='form-label'>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">Login</button>
            </div>
            <h5 className='mt-3'><Link to="/register">Create an account</Link></h5>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
