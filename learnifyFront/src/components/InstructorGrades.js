import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './InstructorGrades.css';
import { Link } from 'react-router-dom';
 // Ensure you have this CSS file for custom styles

function InstructorGrades() {
  const [grades, setGrades] = useState([]);
  const instructorId = localStorage.getItem('id');

  useEffect(() => {
    const fetchGrades = async () => {
      const result = await axios.get(`/api/grades/instructor/${instructorId}`);
      console.log(result.data)
      setGrades(result.data);
    };

    fetchGrades();
  }, [instructorId]);

  return (

    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Student Enrolled Courses - Online Courses & Education Bootstrap5
        Template
      </title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="" />
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
        {/* Start Banner BG Image */}
        <div className="rbt-banner-image" />
        {/* End Banner BG Image */}
      </div>
      {/* Start Card Style */}
      <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Start Dashboard Top */}
              <div className="rbt-dashboard-content-wrapper">
                <div className="tutor-bg-photo bg_image bg_image--23 height-350" />
                {/* Start Tutor Information */}
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
                    {/* Add Announcement Button */}
                    <div className="mb-3">
          
        </div>

      {/* Announcement Modal */}
      
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
                {/* End Tutor Information */}
              </div>
              {/* End Dashboard Top */}
              <div className="row g-5">
                <div className="col-lg-3">
                  {/* Start Dashboard Sidebar */}
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
                                <Link to="/events">
                                  <i className="feather-book-open" />
                                  <span>My Events</span>
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
                  {/* End Dashboard Sidebar */}
                </div>
                <div className="col-lg-9">
                  {/* Start Table */}
                  <div className="rbt-dashboard-table table-responsive mt--30">
                  <div className="containerr">
      <h2>Grades Given by Instructor {instructorId}</h2>
      <ul className="grade-list">
        {grades.map(grade => (
          <li key={grade.id} className="grade-item">
            <div className="grade-details">
              <span className="assignment-title">Assignment: {grade.assignmentTitle}</span>
              <span className="student-name">Student: {grade.userName}</span>
              <span className="score">Score: {grade.score}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
                  </div>
                  {/* End Table */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Card Style */}
    </div>

    
  );
}

export default InstructorGrades;
