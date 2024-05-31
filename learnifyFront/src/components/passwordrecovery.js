import React, { useState } from "react";
import axios from "axios";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const sendPasswordResetEmail = async () => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Assuming your backend has an endpoint for sending password reset emails
      const response = await axios.post(
        "http://localhost:8080/api/password-reset",
        { email }
      );
      setSuccessMessage(response.data.message);
    } catch (error) {
      setErrorMessage("Failed to send password reset email.");
    }
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendPasswordResetEmail();
  };

  return (
    <div className="password-recovery-container">
      <h2>Password Recovery</h2>
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Sending Email..." : "Send Password Reset Email"}
        </button>
      </form>
    </div>
  );
};

export default PasswordRecovery;
