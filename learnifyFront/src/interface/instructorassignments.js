
import React from "react";
import { Link } from "react-router-dom";

const instructorassignments = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Instructor Assignments - Online Courses &amp; Education Bootstrap5
        Template
      </title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <a className="rbt-close_side_menu" href="javascript:void(0);" />

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
                  {/* End Dashboard Sidebar  */}
                </div>
                <div className="col-lg-9">
                  {/* Start Enrole Course  */}
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">Assignments</h4>
                      </div>
                      {/* Start Filter */}
                      <div className="rbt-dashboard-filter-wrapper">
                        <div className="row g-5">
                          <div className="col-lg-6">
                            <div className="filter-select rbt-modern-select">
                              <span className="select-label d-block">
                                Courses
                              </span>
                              <select
                                className="w-100"
                                data-live-search="true"
                                title="All"
                                multiple
                                data-size={7}
                                data-actions-box="true"
                                data-selected-text-format="count > 2"
                              >
                                <option data-subtext="HTML">Web Design</option>
                                <option data-subtext="Photoshop">
                                  Graphic
                                </option>
                                <option data-subtext="Career">English</option>
                                <option data-subtext="Career">
                                  Spoken English
                                </option>
                                <option data-subtext="Experts">
                                  Art Painting
                                </option>
                                <option data-subtext="Experts">
                                  App Development
                                </option>
                                <option data-subtext="Experts">
                                  Web Application
                                </option>
                                <option data-subtext="Experts">
                                  Php Development
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="filter-select rbt-modern-select">
                              <span className="select-label d-block">
                                Short By
                              </span>
                              <select className="w-100">
                                <option>Default</option>
                                <option>Latest</option>
                                <option>Popularity</option>
                                <option>Trending</option>
                                <option>Price: low to high</option>
                                <option>Price: high to low</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="filter-select rbt-modern-select">
                              <span className="select-label d-block">
                                Short By Offer
                              </span>
                              <select className="w-100">
                                <option>Free</option>
                                <option>Paid</option>
                                <option>Premium</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Filter */}
                      <hr className="mt--30" />
                      <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
                        <table className="rbt-table table table-borderless">
                          <thead>
                            <tr>
                              <th>Assignment Name</th>
                              <th>Total Marks</th>
                              <th>Total Submit</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>
                                <span className="h6 mb--5">
                                  Write a short essay on yourself using the 5
                                </span>
                                <p className="b3">
                                  Course: <a href="#">Fundamentals 101</a>
                                </p>
                              </th>
                              <td>
                                <p className="b3">80</p>
                              </td>
                              <td>
                                <p className="b3">2</p>
                              </td>
                              <td>
                                <div className="rbt-button-group justify-content-end">
                                  <a
                                    className="rbt-btn btn-xs bg-primary-opacity radius-round"
                                    href="#"
                                    title="Edit"
                                  >
                                    <i className="feather-edit pl--0" /> Edit
                                  </a>
                                  <a
                                    className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                                    href="#"
                                    title="Delete"
                                  >
                                    <i className="feather-trash-2 pl--0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="h6 mb--5">
                                  Speaking Korean for Beginners
                                </span>
                                <p className="b3">
                                  Course: <a href="#">Speaking 101</a>
                                </p>
                              </th>
                              <td>
                                <p className="b3">20</p>
                              </td>
                              <td>
                                <p className="b3">3</p>
                              </td>
                              <td>
                                <div className="rbt-button-group justify-content-end">
                                  <a
                                    className="rbt-btn btn-xs bg-primary-opacity radius-round"
                                    href="#"
                                    title="Edit"
                                  >
                                    <i className="feather-edit pl--0" /> Edit
                                  </a>
                                  <a
                                    className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                                    href="#"
                                    title="Delete"
                                  >
                                    <i className="feather-trash-2 pl--0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="h6 mb--5">
                                  Song Writing Techniques 101
                                </span>
                                <p className="b3">
                                  Course: <a href="#">Song Writing</a>
                                </p>
                              </th>
                              <td>
                                <p className="b3">60</p>
                              </td>
                              <td>
                                <p className="b3">10</p>
                              </td>
                              <td>
                                <div className="rbt-button-group justify-content-end">
                                  <a
                                    className="rbt-btn btn-xs bg-primary-opacity radius-round"
                                    href="#"
                                    title="Edit"
                                  >
                                    <i className="feather-edit pl--0" /> Edit
                                  </a>
                                  <a
                                    className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                                    href="#"
                                    title="Delete"
                                  >
                                    <i className="feather-trash-2 pl--0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="h6 mb--5">
                                  Arabic For Beginners
                                </span>
                                <p className="b3">
                                  Course: <a href="#">Arabic Writing</a>
                                </p>
                              </th>
                              <td>
                                <p className="b3">40</p>
                              </td>
                              <td>
                                <p className="b3">15</p>
                              </td>
                              <td>
                                <div className="rbt-button-group justify-content-end">
                                  <a
                                    className="rbt-btn btn-xs bg-primary-opacity radius-round"
                                    href="#"
                                    title="Edit"
                                  >
                                    <i className="feather-edit pl--0" /> Edit
                                  </a>
                                  <a
                                    className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                                    href="#"
                                    title="Delete"
                                  >
                                    <i className="feather-trash-2 pl--0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* End Enrole Course  */}
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
    </div>
  );
};

export default instructorassignments;

