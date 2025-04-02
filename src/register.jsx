import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if(!name || !email || !password){
      alert("All fields are required");
      return;
    }

    try {
      const res = await axios.post('https://api.escuelajs.co/api/v1/users', {
        email,
        password,
        name,
      });

      alert('Registration Successfully');
      navigate('/login');
    } catch (error) {
      console.log('Error', error);
      alert('Registration Failed');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Register</h1>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className='form-label' htmlFor="name">UserName:</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <label className='form-label'>Email: </label>
            <div className="mb-3">
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
              <label className='form-label' htmlFor="password">Password: </label>
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
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <h5 className='mt-3'>Already a user?<a href="/login"><span>Login</span></a></h5>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
