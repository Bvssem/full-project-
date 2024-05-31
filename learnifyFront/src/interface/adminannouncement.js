import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import AddAnnouncement from "../components/AddAnnouncment";
import { Link,useNavigate } from "react-router-dom";

const Adminannouncement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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
  const handleAddAnnouncement = () =>  {
    navigate("/addannouncment");
  };

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
                <Button variant="primary" onClick={handleAddAnnouncement}>
            Add Announcement
          </Button>
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
                      <ul className="rbt-meta rbt-meta-white mt--5">
                        {/* Meta information */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddAnnouncement onAdd={handleAddAnnouncement} />
        </Modal.Body>
      </Modal>
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
                {/* Content goes here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminannouncement;
