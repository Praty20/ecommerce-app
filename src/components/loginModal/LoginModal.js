import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./LoginModal.css"; // Add your styles here

const LoginModal = ({ setShowModal }) => {
  const { login } = useContext(GlobalContext);
  const [credentials, setCredentials] = useState({ id: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.id && credentials.password) {
      // Simulate login and set the user globally
      login({ name: credentials.id }); // In a real app, validate the credentials
      setShowModal(false); // Close the modal after login
    }
  };

  return (
    <div className="login-modal">
      <div className="modal-content">
        <span className="close-btn" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>ID</label>
          <input
            type="text"
            name="id"
            value={credentials.id}
            onChange={handleInputChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
