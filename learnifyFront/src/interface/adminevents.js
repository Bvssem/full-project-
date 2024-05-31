import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const Adminevents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/events/all");
        console.log(response.data)
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleApproveEvent = (eventId) => {
    axios
      .patch(`http://localhost:8080/api/admins/approove/${eventId}`, {
        isApproved: true,
      })
      .then((response) => {
        console.log(response)
        console.log(`Event ${eventId} approved successfully`);
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event.id === eventId ? { ...event, isApproved: true } : event
          )
        );
      })
      .catch((error) => {
        console.error(`Error approving event ${eventId}:`, error);
      });

      toast.success("event approved")

  };

  const handleRejectEvent = (eventId) => {
    axios
      .delete(`http://localhost:8080/api/admins/reject/${eventId}`)
      .then((response) => {
        console.log(`Event ${eventId} rejected or deleted successfully`);
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.id !== eventId)
        );
      })
      .catch((error) => {
        console.error(`Error rejecting event ${eventId}:`, error);
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
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="assets/images/favicon.png"
      />
      <a className="close_side_menu" href="javascript:void(0);"></a>
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>
      </div>
      <div className="rbt-dashboard-area rbt-section-overlay ping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-dashboard-content-wrapper">
                <div className="rbt-tutor-information">
                  <div className="rbt-tutor-information-left">
                    <div className="thumbnail rbt-avatars size-lg">
                      <img
                        src="assets/images/team/avatar.jpg"
                        alt="Instructor"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="title">Admin</h5>
                    </div>
                  </div>
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
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">Event Validation</h4>
                      </div>
                    </div>
                  </div>
                  <div className="row gy-5">
                    <div className="col-lg-12">
                      <div className="rbt-dashboard-table table-responsive">
                        <table className="rbt-table table table-borderless">
                          <thead>
                            <tr>
                              <th>Event Name</th>
                              <th>Title</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {events.map((event) => (
                              <tr key={event.id}>
                                <td>{event.eventTitle}</td>
                                <td>{event.eventContent}</td>
                                <td>{event.isapprooved ? "Approved" : "Pending"}</td>
                                <td>
                                  {event.isapprooved ? (
                                    <button className="btn btn-success" disabled>
                                      Approved
                                    </button>
                                  ) : (
                                    <>
                                      <button
                                        className="btn btn-success"
                                        onClick={() => handleApproveEvent(event.id)}
                                      >
                                        Approve
                                      </button>{" "}
                                    </>
                                  )}
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => handleRejectEvent(event.id)}
                                  >
                                    Reject
                                  </button>
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
    </div>
  );
};

export default Adminevents;
