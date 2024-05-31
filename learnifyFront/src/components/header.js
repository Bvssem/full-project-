import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 

const Header = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate(); 

  const handleLogout = (event) => {
    event.preventDefault(); 
    localStorage.clear(); 
    navigate('/forumlogin'); 
  };

  useEffect(() => {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");

    
      setUsername(username);
      setEmail(email);
      setRole(role);
    console.log(role);
  }, []);

  return (
    <div className="rbt-header-elements bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row mb--55">
          <div className="col-lg-12">
            <div className="section-title text-center"></div>
          </div>
        </div>
      </div>
      <header className="rbt-header rbt-header-10 rbt-transparent-header">
        <div className="rbt-sticky-placeholder" />
        <div className="rbt-header-wrapper  header-not-transparent header-sticky">
          <div className="container">
            <div className="mainbar-row rbt-navigation-center align-items-center">
              <div className="header-left rbt-header-content">
                <div className="header-info">
                  <div className="logo">
                    <Link to="/">
                      <img src="assets/images/logo/logo.png" alt="Education Logo Images" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li className="with-megamenu has-menu-child-item position-static">
                      <Link to="/home">
                        Home <i className="feather-chevron-down" />
                      </Link>
                    </li>
                    <li className="with-megamenu has-menu-child-item">
                      <Link to="/Courses">
                        Courses <i className="feather-chevron-down" />
                      </Link>
                    </li>
                    <li className="with-megamenu has-menu-child-item position-static">
                      <Link to="/Events">
                        Events <i className="feather-chevron-down" />
                      </Link>
                    </li>
                    <li className="with-megamenu has-menu-child-item position-static">
                      <Link to="/Contact">
                        Contact <i className="feather-chevron-down" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <ul className="quick-access">
                  <li className="access-icon rbt-mini-cart">
                    <Link className="rbt-cart-sidenav-activation rbt-round-btn" to="/panier">
                      <i className="feather-shopping-cart" />
                      <span className="rbt-cart-count"></span>
                    </Link>
                  </li>
                  <li className="account-access rbt-user-wrapper d-none d-xl-block">
                    <a href="#">
                      <i className="feather-user" />
                    </a>
                    <div className="rbt-user-menu-list-wrapper">
                      <div className="inner">
                        <div className="rbt-admin-profile">
                          <div className="admin-thumbnail">
                            <img src="assets/images/team/avatar.jpg" alt="User Images" />
                          </div>
                          <div className="admin-info">
                            <span className="name">{username}</span>
                            <Link className="rbt-btn-link color-primary" to="/profile">
                              View Profile
                            </Link>
                          </div>
                        </div>
                        <ul className="user-list-wrapper">
                          <li>
                            <Link to={
                              role === "ROLE_ADMIN" ? "/admindash" :
                              role === "ROLE_USER" ? "/studentdash" :
                              role === "ROLE_INSTRUCTOR" ? "/instructordash" : "/"
                            }>
                              <i className="feather-home" />
                              <span>My Dashboard</span>
                            </Link>
                          </li>
                          {role === "ROLE_USER" && (
                            <>
                              <li>
                                <Link to="/studentcourse">
                                  <i className="feather-shopping-bag" />
                                  <span>Enrolled Courses</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/my-quiz-attempts">
                                  <i className="feather-list" />
                                  <span>My Quiz Attempts</span>
                                </Link>
                              </li>
                            </>
                          )}
                          <li>
                            <Link to="#">
                              <i className="feather-bookmark" />
                              <span>Bookmark</span>
                            </Link>
                          </li>
                          
                          
                          <li>
                            <Link to="#">
                              <i className="feather-clock" />
                              <span>Order History</span>
                            </Link>
                          </li>
                          
                        </ul>
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          
                        </ul>
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <Link to="/profile">
                              <i className="feather-settings" />
                              <span>Settings</span>
                            </Link>
                          </li>
                          <li>
                            <a onClick={handleLogout}>
                              <i className="feather-log-out"></i>
                              <span>Logout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="access-icon rbt-user-wrapper d-block d-xl-none">
                    <a className="rbt-round-btn" href="#">
                      <i className="feather-user" />
                    </a>
                    <div className="rbt-user-menu-list-wrapper">
                      <div className="inner">
                        <div className="rbt-admin-profile">
                          <div className="admin-thumbnail">
                            <img src="assets/images/team/avatar.jpg" alt="User Images" />
                          </div>
                          <div className="admin-info">
                            <span className="name">{username}</span>
                            <Link className="rbt-btn-link color-primary" to="/profile">
                              View Profile
                            </Link>
                          </div>
                        </div>
                        <ul className="user-list-wrapper">
                          <li>
                            <Link to={
                              role === "ROLE_ADMIN" ? "/admindash" :
                              role === "ROLE_USER" ? "/studentdash" :
                              role === "ROLE_INSTRUCTOR" ? "/instructordash" : "/"
                            }>
                              <i className="feather-home" />
                              <span>My Dashboard</span>
                            </Link>
                          </li>
                          {role === "ROLE_USER" && (
                            <>
                              <li>
                                <Link to="/studentcourse">
                                  <i className="feather-shopping-bag" />
                                  <span>Enrolled Courses</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/my-quiz-attempts">
                                  <i className="feather-list" />
                                  <span>My Quiz Attempts</span>
                                </Link>
                              </li>
                            </>
                          )}
                          <li>
                            <Link to="#">
                              <i className="feather-bookmark" />
                              <span>Bookmark</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="feather-heart" />
                              <span>Wishlist</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="feather-star" />
                              <span>Reviews</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="feather-clock" />
                              <span>Order History</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="feather-message-square" />
                              <span>Question & Answer</span>
                            </Link>
                          </li>
                        </ul>
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <Link to="#">
                              <i className="feather-book-open" />
                              <span>Getting Started</span>
                            </Link>
                          </li>
                        </ul>
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <Link to="/profile">
                              <i className="feather-settings" />
                              <span>Settings</span>
                            </Link>
                          </li>
                          <li>
                            <a onClick={handleLogout}>
                              <i className="feather-log-out"></i>
                              <span>Logout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="mobile-menu-bar d-block d-xl-none">
                  <div className="hamberger">
                    <button className="hamberger-button rbt-round-btn">
                      <i className="feather-menu" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <a className="close_side_menu" href="javascript:void(0);" />
    </div>
  );
};

export default Header;
