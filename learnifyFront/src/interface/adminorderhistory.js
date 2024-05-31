import React from "react";
import { Link } from "react-router-dom";

const Adminorderhistory = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
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
                        alt="Instructor"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="title">ADMIN</h5>
                      <ul className="rbt-meta rbt-meta-white mt--5"></ul>
                    </div>
                  </div>
                  <div className="rbt-tutor-information-right">
                    <div className="tutor-btn">
                      <a className="rbt-btn btn-md hover-icon-reverse" href="#">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Create course</span>
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
                        <h4 className="rbt-title-style-3">Order History</h4>
                      </div>
                      <div className="rbt-dashboard-table table-responsive mobile-table-750">
                        <table className="rbt-table table table-borderless">
                          <thead>
                            <tr>
                              <th>Order ID</th>
                              <th>Course Name</th>
                              <th>Date</th>
                              <th>Price</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>{/* Table rows */}</tbody>
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

export default Adminorderhistory;
