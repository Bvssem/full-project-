import React from "react";
import { Link } from "react-router-dom";

const Instructorsidebar = () => {
  return (
    <div className="col-lg-3">
      <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
        <div className="inner">
          <div className="content-item-content">
            <div className="rbt-default-sidebar-wrapper">
              <div className="section-title mb--20">
                <h6 className="rbt-title-style-2">Welcome, Instructor</h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  <li>
                    <Link to="/instructor-dashboard">
                      <i className="feather-home" />
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/instructor-profile">
                      <i className="feather-user" />
                      <span>My Profile</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="section-title mt--40 mb--20">
                <h6 className="rbt-title-style-2"></h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  <li>
                    <Link to="/instructor-course">
                      <i className="feather-monitor" />
                      <span>My Courses</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/instructor-announcements">
                      <i className="feather-volume-2" />
                      <span>Announcements</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/instructorq">
                      <i className="feather-message-square" />
                      <span>Quiz Attempts</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/instructorassignments">
                      <i className="feather-list" />
                      <span>Assignments</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="section-title mt--40 mb--20">
                <h6 className="rbt-title-style-2">User</h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  <li>
                    <Link to="/instructorsettings">
                      <i className="feather-settings" />
                      <span>Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/forumlogin">
                      <i className="feather-log-out" />
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructorsidebar;
