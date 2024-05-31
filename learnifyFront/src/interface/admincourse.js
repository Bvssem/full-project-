import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const AdminCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/courses');
        console.log(response.data)
        setCourses(response.data);

      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleApproveCourse = (courseId) => {
    axios.patch(`http://localhost:8080/api/admins/courses/approve/${courseId}`)
      .then((response) => {
        console.log(`Course ${courseId} approved successfully`);
        setCourses((prevCourses) =>
          prevCourses.map((course) =>
            course.id === courseId ? { ...course, status: 'approved' } : course
          )
        );
      })
      .catch((error) => {
        console.error(`Error approving course ${courseId}:`, error);
      });

toast.success("Course approved")
  };

  const handleRejectCourse = (courseId) => {
    axios.patch(`http://localhost:8080/api/admins/courses/reject/${courseId}`)
      .then((response) => {
        console.log(`Course ${courseId} rejected successfully`);
        setCourses((prevCourses) =>
          prevCourses.map((course) =>
            course.id === courseId ? { ...course, status: 'rejected' } : course
          )
        );
      })
      .catch((error) => {
        console.error(`Error rejecting course ${courseId}:`, error);
      });
  };


  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Admin Dashboard - Online Courses &amp; Education Bootstrap5 Template
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
      <a className="close_side_menu" href="javascript:void(0);"></a>
      <div className="rbt-page-banner-wrapper">
        {/* Start Banner BG Image */}
        <div className="rbt-banner-image"></div>
        {/* End Banner BG Image */}
      </div>
      {/* Start Card Style */}
      <div className="rbt-dashboard-area rbt-section-overlay ping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Start Dashboard Top */}
              <div className="rbt-dashboard-content-wrapper">
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
                      <h5 className="title">ADMIN</h5>
                    </div>
                  </div>
                </div>
                {/* End Tutor Information */}
              </div>
              {/* End Dashboard Top */}
            </div>
          </div>
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
              {/* Render course validation table */}
              <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
                <div className="contentt">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">Course Validation</h4>
                      </div>
                    </div>
                  </div>
                  <div className="row gy-5">
                    <div className="col-lg-12">
                      <div className="rbt-dashboard-table table-responsive">
                      <table className="rbt-table table table-borderless">
  <thead>
    <tr>
      <th>Title</th>
      <th>Category</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {courses.map((course) => (
      <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.categories}</td>
        <td>{course.approved ? 'Approved' : 'Pending'}</td>
        <td>
          {course.approved === false && (
            <button
              className="btn btn-success"
              onClick={() => handleApproveCourse(course.id)}
            >
              Approve
            </button>
          )}
          {course.approved === false && (
            <button
              className="btn btn-danger"
              onClick={() => handleRejectCourse(course.id)}
            >
              Reject
            </button>
          )}
        </td>
      </tr>
    ))}
  </tbody>
</table>

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
    </div>
  );
};

export default AdminCourse;
