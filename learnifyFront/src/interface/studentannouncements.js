import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Studentannouncements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/announcements/all");
      console.log(response.data);
      setAnnouncements(response.data);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };
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
                        src="assets/images/team/avatar-2.jpg"
                        alt="Instructor"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="title">Emily Hannah</h5>
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
                                <Link to="/studentprofile">
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
                  {/* End Dashboard Sidebar */}
                </div>
                <div className="col-lg-9">
                  {/* Start Table */}
                  <div className="rbt-dashboard-table table-responsive mt--30">
                  <table className="rbt-table table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Announcement</th>
                        <th scope="col">Creator</th>
                        <th scope="col">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {announcements.map((announcement) => (
                        <tr key={announcement.id}>
                          <td>{announcement.announcement}</td>
                          <td>{announcement.username}</td>
                          <td>{new Date(announcement.date).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
};

export default Studentannouncements;
