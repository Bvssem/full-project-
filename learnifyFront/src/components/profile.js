import React, { useState, useEffect } from "react";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Fetch user data from local storage
    const username= localStorage.getItem("username");
    const email= localStorage.getItem("email");

    if (true) {
      setUsername(username);
      setEmail(email);
    }
  }, []);

  return (
    <>
      <div className="rbt-form-group">
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" value={username} readOnly />
      </div>
      <div className="rbt-form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} readOnly />
      </div>
    </>
  );
};

export default Profile;
