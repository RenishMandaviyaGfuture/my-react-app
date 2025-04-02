import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password } = form;

    try {
      const res = await axios.post('https://api.escuelajs.co/api/v1/users', {
        name,
        email,
        password,
      }, {
        headers: { 'Content-Type': 'application/json' }
      });

      console.log("Registration Successful:", res.data);
      alert('Registration Successful!');
      navigate('/login'); 
    } catch (error) {
      console.error('Error:', error);
      alert('Registration Failed! Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Register</h1>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
            <h5 className="mt-3">
              Already have an account? <a href="/login">Login here</a>
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
