import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const Forumregister = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [role, setRole] = useState("ROLE_USER");
  const [cvUrl, setCvUrl] = useState(""); // New state for storing the URL of the CV
  const navigate = useNavigate();

  const API_URL = "http://localhost:8080/api/auth/signup";

  const registerUser = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(API_URL, formData);
      setUserData(response.data);
      navigate("/forumlogin");
    } catch (error) {
      setError("Error registering user. Please try again.");
    }
    setLoading(false);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleCvUpload = async (event) => {
    const file = event.target.files[0];
  const cvUrl = URL.createObjectURL(file); // Generate URL from the selected file
  setCvUrl(cvUrl);
  
   
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target["register-email"].value;
    const username = event.target["register_user"].value;
    const password = event.target["register_password"].value;
    const confirmPassword = event.target["register_conpassword"].value;

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const formData = {
      username,
      email,
      password,
      role,
      cvUrl 
    };
console.log(formData)
    registerUser(formData);
    if (role=="ROLE_USER" ){
      toast.success("Registered Sucessfuly ")
      }else{
        toast.warn("Wait the validation by the admin ")
    
    
      }
  };

  return (
    <div
      className="col-lg-6"
      style={{
        width: "70%",
        marginLeft: "15%",
        marginTop: "10%",
        marginBottom: "10%",
      }}
    >
      <div className="rbt-contact-form contact-form-style-1 max-width-auto">
        <h3 className="title">Register</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        {!userData && (
          <form className="max-width-auto" onSubmit={handleSubmit}>
            <div className="form-group">
              <input name="register-email" type="email" required />
              <label>Email address *</label>
              <span className="focus-border" />
            </div>
            <div className="form-group">
              <input name="register_user" type="text" required />
              <label>Username *</label>
              <span className="focus-border" />
            </div>
            <div className="form-group">
              <input name="register_password" type="password" required />
              <label>Password *</label>
              <span className="focus-border" />
            </div>
            <div className="form-group">
              <input name="register_conpassword" type="password" required />
              <label>Confirm Password *</label>
              <span className="focus-border" />
            </div>
            <div className="form-group">
              <div>
                <input
                  type="radio"
                  id="student"
                  name="role"
                  value="ROLE_USER"
                  checked={role === "ROLE_USER"}
                  onChange={handleRoleChange}
                />
                <label htmlFor="student">Student</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="instructor"
                  name="role"
                  value="ROLE_INSTRUCTOR"
                  checked={role === "ROLE_INSTRUCTOR"}
                  onChange={handleRoleChange}
                />
                <label htmlFor="instructor">Instructor</label>
                {role === "ROLE_INSTRUCTOR" && (
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleCvUpload} // Upload CV when selected
                  />
                )}
              </div>
            </div>
            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                disabled={loading}
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">
                    {loading ? "Registering..." : "Register"}
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </span>
              </button>
            </div>
          </form>
        )}
        {userData && (
          <div className="alert alert-success">
            <p>Registration successful!</p>
            <p>
              You can now <Link to="/forumlogin">login</Link></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forumregister;