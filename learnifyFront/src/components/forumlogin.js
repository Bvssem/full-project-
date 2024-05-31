import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const ForumLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Correct hook for navigation

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginUser = async () => {
    setLoading(true);
    setError(null);
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        formData
      );
      const { token } = response.data;
      console.log( response.data)

      console.log(token)
      localStorage.setItem("token", token);
      const { role } = response.data.userData;
      const { userData } = response.data;
      console.log(userData) ;
      localStorage.setItem("id", userData.id);
      localStorage.setItem("email", userData.email);
      localStorage.setItem("username", userData.username);
      localStorage.setItem("role", userData.role);



      console.log(role)
      if (role === "ROLE_ADMIN") {
        navigate("/admindash");
      } else if (role === "ROLE_INSTRUCTOR") {
        
        const { approved } = userData;
        if (!approved) {
        setError("Your account is not yet approved.");
        return;
    } else {
        navigate("/instructordash");
        return;
    }
      } else if (role === "ROLE_USER"){
        navigate("/studentdash");
      }
    } catch (error) {
      setError("Invalid username/email or password.");
    }
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser();
  };

  return (
    <div className="rbt-elements-area bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row gy-5 row--30">
          <div className="col-lg-6" style={{ width: "50%", marginLeft: "30%" }}>
            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
              <h3 className="title">Login</h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form className="max-width-auto" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                  <label>Username or email *</label>
                  <span className="focus-border" />
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <label>Password *</label>
                  <span className="focus-border" />
                </div>
                <div className="row mb--30">
                  <div className="col-lg-6">
                    <div className="rbt-checkbox">
                      <input
                        type="checkbox"
                        id="rememberme"
                        name="rememberme"
                      />
                      <label htmlFor="rememberme">Remember me</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="rbt-lost-password text-end">
                      <a className="rbt-btn-link" href="#">
                        You are new here ?  <Link to="/forumregister">register here</Link>
                      </a>
                    </div>
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
                        {loading ? "Logging In..." : "Log In"}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumLogin;
