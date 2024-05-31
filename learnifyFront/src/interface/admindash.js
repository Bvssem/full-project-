import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";


const Admindash = () => {

  const [totalCourses, setTotalCourses] = useState(0);
  const [totalInstructors, setTotalInstructors] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);


  useEffect(() => {
    const fetchTotalCourses = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/courses/count");
        const instructorsResponse = await axios.get("http://localhost:8080/user/count/instructors");
        const studentsResponse = await axios.get("http://localhost:8080/user/count/students");

        setTotalInstructors(instructorsResponse.data);
        setTotalStudents(studentsResponse.data);
        const count = await response.json();
        setTotalCourses(count);
      } catch (error) {
        console.error("Error fetching total courses:", error);
      }
    };

    fetchTotalCourses();
  }, []);
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
                      <h5 className="title" style={{ color: "purple" }}>
                        ADMIN
                      </h5>
                      <div className="rbt-review"></div>
                    </div>
                  </div>
                  <div className="rbt-tutor-information-right">
                    <div className="tutor-btn"></div>
                  </div>
                </div>
                {/* End Tutor Information  */}
              </div>
              {/* End Dashboard Top  */}
              <div className="row g-5">
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
                                <Link to="/Admindash">
                                  <i className="feather-home" />
                                  <span>Dashboard</span>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                              <li>
                                <Link to="/Admincourse">
                                  <i className="feather-monitor" />
                                  <span>Courses Validation</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/Adminevents">
                                  <i className="feather-volume-2" />
                                  <span>Events Validation</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/Admininstructors">
                                  <i className="feather-volume-2" />
                                  <span>Instructor Validation</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/Aminannouncement">
                                  <i className="feather-message-square" />
                                  <span>Announcements</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/Adminorderhistory">
                                  <i className="feather-list" />
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
                                <Link to="/profile">
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
                <div className="col-lg-9">
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
                    <div className="contentt">
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
                                    {totalCourses}
                                  </span>
                                </h3>
                                <span className="rbt-title-style-2 d-block">
                                  Total Courses
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
                                    {totalInstructors}
                                  </span>
                                </h3>
                                <span className="rbt-title-style-2 d-block">
                                  Total Instuctors
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                        {/* Start Single Card  */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                          <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-pink-opacity">
                            <div className="inner">
                              <div className="rbt-round-icon bg-pink-opacity">
                                <i className="feather-users" />
                              </div>
                              <div className="contentt">
                                <h3 className="counter without-icon color-pink">
                                  <span className="odometer" data-count={160}>
                                    {totalStudents}
                                  </span>
                                </h3>
                                <span className="rbt-title-style-2 d-block">
                                  Total Students
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                        {/* Start Single Card  */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                          <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-warning-opacity">
                            <div className="inner">
                              <div className="rbt-round-icon bg-warning-opacity">
                                <i className="feather-dollar-sign" />
                              </div>
                              <div className="contentt">
                                <h3 className="counter color-warning">
                                  <span className="odometer" data-count={25000}>
                                    {totalStudents}
                                  </span>
                                </h3>
                                <span className="rbt-title-style-2 d-block">
                                  Total Earnings
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
          className="rbt-progress-line-svg"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <line
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            className="rbt-progress-line"
          />
        </svg>
      </div>
    </div>
  );
};

export default Admindash;
