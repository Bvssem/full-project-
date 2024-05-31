import React from "react";

const Adminsidebar = () => {
  return (
    <div className="col-lg-3">
      <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
        <div className="inner">
          <div className="content-item-content">
            <div className="rbt-default-sidebar-wrapper">
              <div className="section-title mb--20">
                <h6 className="rbt-title-style-2">Welcome</h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  <li>
                    <a href="admindash">
                      <i className="feather-home" />
                      <span>Dashboard</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  <li>
                    <a href="instructor-course.html">
                      <i className="feather-monitor" />
                      <span>Courses Validation</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="feather-volume-2" />
                      <span>Events Validation</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="feather-volume-2" />
                      <span>Instructor Validation</span>
                    </a>
                  </li>
                  <li>
                    <a href="instructor-quiz-attempts.html">
                      <i className="feather-message-square" />
                      <span>Announcements</span>
                    </a>
                  </li>
                  <li>
                    <a href="instructor-assignments.html">
                      <i className="feather-list" />
                      <span>Order History</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="section-title mt--40 mb--20">
                <h6 className="rbt-title-style-2">User</h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  <li>
                    <a href="instructor-settings.html">
                      <i className="feather-settings" />
                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <i className="feather-log-out" />
                      <span>Logout</span>
                    </a>
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

export default Adminsidebar;
