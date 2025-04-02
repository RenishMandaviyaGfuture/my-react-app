import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = form;

    try {
      const res = await axios.get('https://api.escuelajs.co/api/v1/users', {
        headers: { 'Content-Type': 'application/json' }
      });

      const users = res.data;
      const user = users.find((user) => user.email === email);

      if (user) {
        // Ideally, you should compare hashed passwords
        if (user.password === password) { 
          localStorage.setItem("isLoggedIn", "true");
          alert("Login successful!");
          navigate('/home');
        } else {
          alert("Incorrect password");
        }
      } else {
        alert("User not found!");
      }
    } catch (error) {
      console.error('Error:', error);
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
              <button type="submit" className="btn btn-success">Login</button>
            </div>
            <h5 className="mt-3">
              <Link to="/register">Create an account</Link>
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
