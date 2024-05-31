import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Studentdash = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Student Dashboard - Online Courses &amp; Education Bootstrap5 Template
      </title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <a className="close_side_menu" href="javascript:void(0);" />
      <div className="rbt-page-banner-wrapper">
        {/* Start Banner BG Image  */}
        <div className="rbt-banner-image" />
        {/* End Banner BG Image  */}
      </div>
      {/* Start Card Style */}
      <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Start Dashboard Top  */}
              <div className="rbt-dashboard-content-wrapper">
                <div className="tutor-bg-photo bg_image bg_image--23 height-350" />
                {/* Start Tutor Information  */}
                <div className="rbt-tutor-information">
                  <div className="rbt-tutor-information-left">
                    <div className="thumbnail rbt-avatars size-lg">
                      <img
                        src="assets/images/team/avatar-2.jpg"
                        alt="Instructor"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="title">Student</h5>
                      <ul className="rbt-meta rbt-meta-white mt--5">
                        <li>
                          <i className="feather-book" />
                        </li>
                        <li>
                          <i className="feather-award" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Tutor Information  */}
              </div>
              {/* End Dashboard Top  */}
              <div className="row g-5">
                <div className="col-lg-3">
                  {/* Start Dashboard Sidebar  */}
                  <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                    <div className="inner">
                      <div className="content-item-content">
                        <div className="rbt-default-sidebar-wrapper">
                          <div className="section-title mb--20">
                            <h6 className="rbt-title-style-2">
                              Welcome, Student
                            </h6>
                          </div>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                              <li>
                                <Link to="/studentdash">
                                  <i className="feather-home" />
                                  <span>Dashboard</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/profile">
                                  <i className="feather-user" />
                                  <span>My Profile</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/studentcourse">
                                  <i className="feather-book-open" />
                                  <span>Enrolled Courses</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/quizlist">
                                  <i className="feather-help-circle" />
                                  <span>Quizzes</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/assignment-list">
                                  <i className="feather-help-circle" />
                                  <span>Assignments</span>
                                </Link>
                              </li>

                              <li>
                                <Link to="/grades/user">
                                  <i className="feather-help-circle" />
                                  <span>Assignments Grades</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/my-quiz-attempts">
                                  <i className="feather-help-circle" />
                                  <span>My Quiz Attempts</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/studentannouncement">
                                  <i className="feather-help-circle" />
                                  <span>Announcements</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/studentorderhistory">
                                  <i className="feather-shopping-bag" />
                                  <span>Order History</span>
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
                                <Link to="/studentsettings">
                                  <i className="feather-settings" />
                                  <span>Settings</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
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
                  {/* End Dashboard Sidebar  */}
                </div>
                <div className="col-lg-9">
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
                    <div className="contentt">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">Dashboard</h4>
                      </div>
                      <div className="row g-5">
                        {/* Start Single Card  */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                          <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-primary-opacity">
                            <div className="inner">
                              <div className="rbt-round-icon bg-primary-opacity">
                                <i className="feather-book-open" />
                              </div>
                              <div className="contentt">
                                <h3 className="counter without-icon color-primary">
                                  <span className="odometer" data-count={30}>
                                    0
                                  </span>
                                </h3>
                                <span className="rbt-title-style-2 d-block">
                                  Enrolled Courses
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                        {/* Start Single Card  */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                          <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-secondary-opacity">
                            <div className="inner">
                              <div className="rbt-round-icon bg-secondary-opacity">
                                <i className="feather-monitor" />
                              </div>
                              <div className="contentt">
                                <h3 className="counter without-icon color-secondary">
                                  <span className="odometer" data-count={10}>
                                    00
                                  </span>
                                </h3>
                                <span className="rbt-title-style-2 d-block">
                                  ACTIVE COURSES
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                        {/* Start Single Card  */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                          <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-violet-opacity">
                            <div className="inner">
                              <div className="rbt-round-icon bg-violet-opacity">
                                <i className="feather-award" />
                              </div>
                              <div className="contentt">
                                <h3 className="counter without-icon color-violet">
                                  <span className="odometer" data-count={7}>
                                    00
                                  </span>
                                </h3>
                                <span className="rbt-title-style-2 d-block">
                                  Completed Courses
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Card Style */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
    
      <div className="rbt-progress-parent">
        <svg
          className="rbt-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* JS
============================================ */}
      {/* Modernizer JS */}
      {/* jQuery JS */}
      {/* Bootstrap JS */}
      {/* sal.js */}
      {/* Main JS */}
    </div>
  );
};

export default Studentdash;
