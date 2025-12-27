import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Make sure to include appropriate CSS for the design

const Login = ({ setIsAdmin, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validUsername = "admin";
  const validPassword = "password";

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === validUsername && password === validPassword) {
      setIsAdmin(true);
      setUser({ username });
      navigate("/admin");
    } else {
      setErrorMessage("Invalid credentials");
    }
  };

  return (
    <>
    <br />
      {/* Main Heading */}
      <h2 style={{  textAlign: "center", color: "black" }}>
        SHOPPINN APP
      </h2>

      {/* Rings and Login Form */}
      <div className="ring">
        <i style={{ "--clr": "#00ff0a" }}></i>
        <i style={{ "--clr": "#ff0057" }}></i>
        <i style={{ "--clr": "#fffd44" }}></i>

        <div className="login">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="inputBx">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="inputBx">
              <input type="submit" value="Sign in" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
