import React from "react";

const Studentsidebar = () => {
  return (
    <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
      <div className="inner">
        <div className="content-item-content">
          <div className="rbt-default-sidebar-wrapper">
            <div className="section-title mb--20">
              <h6 className="rbt-title-style-2">Welcome, Student</h6>
            </div>
            <nav className="mainmenu-nav">
              <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                <li>
                  <a href="student-dashboard.html">
                    <i className="feather-home" />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="student-profile.html">
                    <i className="feather-user" />
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <a href="student-enrolled-courses.html">
                    <i className="feather-book-open" />
                    <span>Enrolled Courses</span>
                  </a>
                </li>
                <li>
                  <a href="student-wishlist.html">
                    <i className="feather-bookmark" />
                    <span>Wishlist</span>
                  </a>
                </li>
                <li>
                  <a href="student-reviews.html">
                    <i className="feather-star" />
                    <span>Announcements</span>
                  </a>
                </li>
                <li>
                  <a href="student-my-quiz-attempts.html">
                    <i className="feather-help-circle" />
                    <span>My Quiz Attempts</span>
                  </a>
                </li>
                <li>
                  <a href="student-order-history.html">
                    <i className="feather-shopping-bag" />
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
                  <a href="student-settings.html">
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
  );
};

export default Studentsidebar;
