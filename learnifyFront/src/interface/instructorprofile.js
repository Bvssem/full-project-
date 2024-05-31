import React from "react";
import { Link } from "react-router-dom";

const Instructorprofile = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Admin Dashboard - Online Courses &amp; Education Bootstrap5 Template
      </title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Favicon */}
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="assets/images/favicon.png"
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
                <div className="tutor-bg-photo bg_image bg_image--22 height-350" />
                {/* Start Tutor Information  */}
                <div className="rbt-tutor-information">
                  <div className="rbt-tutor-information-left">
                    <div className="thumbnail rbt-avatars size-lg">
                      <img
                        src="assets/images/team/avatar.jpg"
                        alt="Instructor"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="Instructor username">Instructor</h5>
                    </div>
                  </div>
                  <div className="rbt-tutor-information-right">
                    <div className="tutor-btn">
                      <a
                        className="rbt-btn btn-md hover-icon-reverse"
                        href="/createcourse"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Create a New Course</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="rbt-tutor-information-right">
                    <div className="tutor-btn">
                      <a
                        className="rbt-btn btn-md hover-icon-reverse"
                        href="/createevent"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Create a New Event</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Tutor Information  */}
              </div>
              {/* End Dashboard Top  */}
              <div className="row g-5">
                <div className="col-lg-3">
                  <div className="col-lg-3">
                    <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                      <div className="inner">
                        <div className="content-item-content">
                          <div className="rbt-default-sidebar-wrapper">
                            <div className="section-title mb--20">
                              <h6 className="rbt-title-style-2">
                                Welcome, Instructor
                              </h6>
                            </div>
                            <nav className="mainmenu-nav">
                              <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                <li>
                                  <Link to="/instructordash">
                                    <i className="feather-home" />
                                    <span>Dashboard</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/instructorprofile">
                                    <i className="feather-user" />
                                    <span>My Profile</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/Instructorcourses">
                                    <i className="feather-book-open" />
                                    <span>My Courses</span>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="/instructor-my-quiz-attempts">
                                    <i className="feather-help-circle" />
                                    <span> Assignments </span>
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                            <div className="section-title mt--40 mb--20">
                              <h6 className="rbt-title-style-2">Instructor</h6>
                            </div>
                            <nav className="mainmenu-nav">
                              <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                <li>
                                  <Link to="/instructorcourses">
                                    <i className="feather-monitor" />
                                    <span>My Courses</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/instructorannouncement">
                                    <i className="feather-volume-2" />
                                    <span>Announcements</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/instructor-quiz-attempts">
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
                </div>
                <div className="col-lg-9">
                  {/* Start Instructor Profile  */}
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">My Profile</h4>
                      </div>
                      {/* Start Profile Row  */}
                      <div className="rbt-profile-row row row--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">
                            Registration Date
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">
                            February 25, 2025 6:01 am
                          </div>
                        </div>
                      </div>
                      {/* End Profile Row  */}
                      {/* Start Profile Row  */}
                      <div className="rbt-profile-row row row--15 mt--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">
                            First Name
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">John</div>
                        </div>
                      </div>
                      {/* End Profile Row  */}
                      {/* Start Profile Row  */}
                      <div className="rbt-profile-row row row--15 mt--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">
                            Last Name
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">Doe</div>
                        </div>
                      </div>
                      {/* End Profile Row  */}
                      {/* Start Profile Row  */}
                      <div className="rbt-profile-row row row--15 mt--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">Username</div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">
                            instructor
                          </div>
                        </div>
                      </div>
                      {/* End Profile Row  */}
                      {/* Start Profile Row  */}
                      <div className="rbt-profile-row row row--15 mt--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">Email</div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">
                            example@gmail.com
                          </div>
                        </div>
                      </div>
                      {/* End Profile Row  */}
                      {/* Start Profile Row  */}
                      <div className="rbt-profile-row row row--15 mt--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">
                            Phone Number
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">
                            +1-202-555-0174
                          </div>
                        </div>
                      </div>
                      {/* End Profile Row  */}
                      {/* Start Profile Row  */}
                      <div className="rbt-profile-row row row--15 mt--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">
                            Skill/Occupation
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">
                            Application Developer
                          </div>
                        </div>
                      </div>
                      {/* End Profile Row  */}
                      {/* Start Profile Row  */}
                      <div className="rbt-profile-row row row--15 mt--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">
                            Biography
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">
                            I'm the Front-End Developer for #Rainbow IT in
                            Bangladesh, OR. I have serious passion for UI
                            effects, animations and creating intuitive, dynamic
                            user experiences.
                          </div>
                        </div>
                      </div>
                      {/* End Profile Row  */}
                    </div>
                  </div>
                  {/* End Instructor Profile  */}
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
      <div>
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
      </div>
    </div>
  );
};

export default Instructorprofile;