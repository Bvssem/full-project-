import React, { useState } from "react";
import axios from "axios";

const Updatepassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypeNewPassword, setRetypeNewPassword] = useState("");

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== retypeNewPassword) {
      alert("New passwords do not match. Please re-type correctly.");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.example.com/update-password",
        {
          currentPassword,
          newPassword,
        }
      );
      console.log("Password updated successfully:", response.data);
      // Add logic here for handling success (e.g., show success message)
    } catch (error) {
      console.error("Error updating password:", error);
      // Add logic here for handling error (e.g., show error message)
    }
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleUpdatePassword}
          className="rbt-profile-row rbt-default-form row row--15"
        >
          <div className="col-12">
            <div className="rbt-form-group">
              <label htmlFor="currentpassword">Current Password</label>
              <input
                id="currentpassword"
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="rbt-form-group">
              <label htmlFor="newpassword">New Password</label>
              <input
                id="newpassword"
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="rbt-form-group">
              <label htmlFor="retypenewpassword">Re-type New Password</label>
              <input
                id="retypenewpassword"
                type="password"
                placeholder="Re-type New Password"
                value={retypeNewPassword}
                onChange={(e) => setRetypeNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12 mt--10">
            <div className="rbt-form-group">
              <button type="submit" className="rbt-btn btn-gradient">
                Update Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updatepassword;
