
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard"



const Instructorcourses = () => {
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch courses by user ID
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`/api/courses/user/${userId}`);
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [userId]);

  // Filter courses based on approval status
  const approvedCourses = courses.filter(course => course.approved);
  const pendingCourses = courses.filter(course => !course.approved);

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
                  {/* Start Dashboard Sidebar  */}
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
                                <Link to="/profile">
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
                                <Link to="/events">
                                  <i className="feather-book-open" />
                                  <span>My Events</span>
                                </Link>
                              </li>

                              <li>
                                <Link to="/create-quiz">
                                  <i className="feather-message-square" />
                                  <span>Quiz Management</span>
                                </Link>
                              </li>

                              <li>
                                <Link to="/instructor-quizzes">
                                  <i className="feather-message-square" />
                                  <span>My Quizzes</span>
                                </Link>
                              </li>

                              <li>
                                <Link to="/quiz-attempts">
                                  <i className="feather-message-square" />
                                  <span>Quiz Attempts</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/createassignment">
                                  <i className="feather-list" />
                                  <span>Assignments Management</span>
                                </Link>
                              </li>

                              <li>
                                <Link to="/My-Assigments">
                                  <i className="feather-list" />
                                  <span> My Assignments </span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/grades/instructor
">
                                  <i className="feather-list" />
                                  <span> Grades Given </span>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                          <div className="section-title mt--40 mb--20">
                            <h6 className="rbt-title-style-2">Instructor</h6>
                          </div>

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
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="contentt">
          <div className="section-title">
            <h4 className="rbt-title-style-3">My Courses</h4>
          </div>
          <div className="advance-tab-button mb--30">
            <ul
              className="nav nav-tabs tab-button-style-2 justify-content-start"
              id="myTab-4"
              role="tablist"
            >
              <li role="presentation">
                <a
                  href="#"
                  className="tab-button active"
                  id="publish-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#publish-4"
                  role="tab"
                  aria-controls="publish-4"
                  aria-selected="true"
                >
                  <span className="title">Publish</span>
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#"
                  className="tab-button"
                  id="pending-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#pending-4"
                  role="tab"
                  aria-controls="pending-4"
                  aria-selected="false"
                >
                  <span className="title">Pending</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="publish-4"
              role="tabpanel"
              aria-labelledby="publish-tab-4"
            >
              <div className="row g-5">
                {loading ? (
                  <p>Loading...</p>
                ) : approvedCourses.length === 0 ? (
                  <p>No approved courses found.</p>
                ) : (
                  approvedCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))
                )}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pending-4"
              role="tabpanel"
              aria-labelledby="pending-tab-4"
            >
              <div className="row g-5">
                {loading ? (
                  <p>Loading...</p>
                ) : pendingCourses.length === 0 ? (
                  <p>No pending courses found.</p>
                ) : (
                  pendingCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))
                )}
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

export default Instructorcourses;