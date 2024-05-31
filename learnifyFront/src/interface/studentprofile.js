import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Studentprofile = () => {
  const [profileData, setProfileData] = useState({
    registrationDate: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    skill: "",
    biography: "",
  });

  useEffect(() => {
    // Fetch profile data using Axios
    axios
      .get("/api/student/profile")
      .then((response) => {
        setProfileData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the profile data!", error);
      });
  }, []);

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Student Reviews - Online Courses &amp;</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <a className="close_side_menu" href="javascript:void(0);" />
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image" />
      </div>
      <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-dashboard-content-wrapper">
                <div className="tutor-bg-photo bg_image bg_image--23 height-350" />
                <div className="rbt-tutor-information">
                  <div className="rbt-tutor-information-left">
                    <div className="thumbnail rbt-avatars size-lg">
                      <img
                        src="assets/images/team/avatar-2.jpg"
                        alt="Student"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="Student Username">Student username</h5>
                      <ul className="rbt-meta rbt-meta-white mt--5"></ul>
                    </div>
                  </div>
                  <div className="rbt-tutor-information-right"></div>
                </div>
              </div>
              <div className="row g-5">
                <div className="col-lg-3">
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
                </div>

                <div className="col-lg-9">
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">My Profile</h4>
                      </div>

                      <div className="rbt-profile-row row row--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">
                            Registration Date
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">
                            {profileData.registrationDate}
                          </div>
                        </div>
                      </div>

                      <div className="rbt-profile-row row row--15 mt--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">
                            First Name
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">
                            {profileData.firstName}
                          </div>
                        </div>
                      </div>

                      <div className="rbt-profile-row row row--15 mt--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">
                            Last Name
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">
                            {profileData.lastName}
                          </div>
                        </div>
                      </div>

                      <div className="rbt-profile-row row row--15 mt--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">Username</div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">
                            {profileData.username}
                          </div>
                        </div>
                      </div>

                      <div className="rbt-profile-row row row--15 mt--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">Email</div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">
                            {profileData.email}
                          </div>
                        </div>
                      </div>

                      <div className="rbt-profile-row row row--15 mt--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">
                            Phone Number
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">
                            {profileData.phoneNumber}
                          </div>
                        </div>
                      </div>

                      <div className="rbt-profile-row row row--15 mt--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">
                            Skill/Occupation
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">
                            {profileData.skill}
                          </div>
                        </div>
                      </div>

                      <div className="rbt-profile-row row row--15 mt--15">
                        <div className="col-lg-4 col-md-4">
                          <div className="rbt-profile-content b2">
                            Biography
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="rbt-profile-content b2">
                            {profileData.biography}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <div className="rbt-progress-parent">
        <svg className="rbt-back-circle svg-inner" width="100%" height="100%">
          <circle
            className="circle circle-white"
            cx="50%"
            cy="50%"
            r="40%"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Studentprofile;
