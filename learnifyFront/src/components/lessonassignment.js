import React from "react";

const Lessona = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Lesson - Online Courses &amp; </title>
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
      {/* CSS
	============================================ */}
      <link rel="stylesheet" href="assets/css/plugins/jquery-ui.css" />
      <link rel="stylesheet" href="assets/css/plugins/magnigy-popup.min.css" />
      <link rel="stylesheet" href="assets/css/plugins/plyr.css" />
      <link rel="stylesheet" href="assets/css/style.css" />
      <div className="rbt-lesson-area bg-color-white">
        <div className="rbt-lesson-content-wrapper">
          <div className="rbt-lesson-leftsidebar">
            <div className="rbt-course-feature-inner rbt-search-activation">
              <div className="section-title">
                <h4 className="rbt-title-style-3">Course Content</h4>
              </div>
              <div className="lesson-search-wrapper">
                <form action="#" className="rbt-search-style-1">
                  <input
                    className="rbt-search-active"
                    type="text"
                    placeholder="Search Lesson"
                  />
                  <button className="search-btn disabled">
                    <i className="feather-search" />
                  </button>
                </form>
              </div>
              <hr className="mt--10" />
              <div className="rbt-accordion-style rbt-accordion-02 for-right-content accordion">
                <div className="accordion" id="accordionExampleb2">
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingTwo1"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        data-bs-target="#collapseTwo1"
                        aria-controls="collapseTwo1"
                      >
                        Welcome Histudy{" "}
                        <span className="rbt-badge-5 ml--10">1/2</span>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo1"
                    >
                      <div className="accordion-body card-body">
                        <ul className="rbt-course-main-content liststyle">
                          <li>
                            <a href="lesson.html">
                              <div className="course-content-left">
                                <i className="feather-play-circle" />{" "}
                                <span className="text">Course Intro</span>
                              </div>
                              <div className="course-content-right">
                                <span className="min-lable">30 min</span>
                                <span className="rbt-check">
                                  <i className="feather-check" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="lesson-intro.html">
                              <div className="course-content-left">
                                <i className="feather-file-text" />{" "}
                                <span className="text">Introduction</span>
                              </div>
                              <div className="course-content-right">
                                <span className="rbt-check">
                                  <i className="feather-check" />
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingTwo4"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        data-bs-target="#collapseTwo4"
                        aria-controls="collapseTwo4"
                      >
                        Welcome Lessons{" "}
                        <span className="rbt-badge-5 ml--10">1/3</span>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo4"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo4"
                    >
                      <div className="accordion-body card-body">
                        <ul className="rbt-course-main-content liststyle">
                          <li>
                            <a href="lesson.html">
                              <div className="course-content-left">
                                <i className="feather-play-circle" />{" "}
                                <span className="text">Hello World!</span>
                              </div>
                              <div className="course-content-right">
                                <span className="min-lable">0.37</span>
                                <span className="rbt-check">
                                  <i className="feather-check" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="course-content-left">
                                <i className="feather-play-circle" />{" "}
                                <span className="text">
                                  Values and Variables
                                </span>
                              </div>
                              <div className="course-content-right">
                                <span className="min-lable">20 min</span>
                                <span className="rbt-check unread">
                                  <i className="feather-circle" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="course-content-left">
                                <i className="feather-play-circle" />{" "}
                                <span className="text">Basic Operators</span>
                              </div>
                              <div className="course-content-right">
                                <span className="min-lable">15 min</span>
                                <span className="rbt-check unread">
                                  <i className="feather-circle" />
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingTwo2"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        data-bs-target="#collapseTwo2"
                        aria-controls="collapseTwo2"
                      >
                        Histudy Quiz{" "}
                        <span className="rbt-badge-5 ml--10">1/2</span>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo2"
                    >
                      <div className="accordion-body card-body">
                        <ul className="rbt-course-main-content liststyle">
                          <li>
                            <a href="lesson-quiz.html">
                              <div className="course-content-left">
                                <i className="feather-help-circle" />{" "}
                                <span className="text">Histudy Quiz Start</span>
                              </div>
                              <div className="course-content-right">
                                <span className="rbt-check unread">
                                  <i className="feather-circle" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="lesson-quiz-result.html">
                              <div className="course-content-left">
                                <i className="feather-help-circle" />{" "}
                                <span className="text">
                                  Histudy Quiz Result
                                </span>
                              </div>
                              <div className="course-content-right">
                                <span className="rbt-check unread">
                                  <i className="feather-circle" />
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingTwo3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        data-bs-target="#collapseTwo3"
                        aria-controls="collapseTwo3"
                      >
                        Histudy Assignments{" "}
                        <span className="rbt-badge-5 ml--10">1/2</span>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo3"
                    >
                      <div className="accordion-body card-body">
                        <ul className="rbt-course-main-content liststyle">
                          <li>
                            <a href="lesson-assignments.html">
                              <div className="course-content-left">
                                <i className="feather-file-text" />{" "}
                                <span className="text">
                                  Histudy Assignments
                                </span>
                              </div>
                              <div className="course-content-right">
                                <span className="rbt-check unread">
                                  <i className="feather-circle" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="lesson-assignments-submit.html">
                              <div className="course-content-left">
                                <i className="feather-file-text" />{" "}
                                <span className="text">
                                  Histudy Assignments Submit
                                </span>
                              </div>
                              <div className="course-content-right">
                                <span className="rbt-check unread">
                                  <i className="feather-circle" />
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rbt-lesson-rightsidebar overflow-hidden">
            <div className="lesson-top-bar">
              <div className="lesson-top-left">
                <div className="rbt-lesson-toggle">
                  <button
                    className="lesson-toggle-active btn-round-white-opacity"
                    title="Toggle Sidebar"
                  >
                    <i className="feather-arrow-left" />
                  </button>
                </div>
                <h5>The Complete Histudy 2023: From Zero to Expert!</h5>
              </div>
              <div className="lesson-top-right">
                <div className="rbt-btn-close">
                  <a
                    href="course-details.html"
                    title="Go Back to Course"
                    className="rbt-round-btn"
                  >
                    <i className="feather-x" />
                  </a>
                </div>
              </div>
            </div>
            <div className="inner">
              <div className="content">
                <div className="section-title">
                  <h4>
                    The Complete JavaScript Course 2023: From Zero to Expert!.
                  </h4>
                  <div className="bg-color-white rbt-shadow-box">
                    <h5 className="rbt-title-style-3">Your Assignment</h5>
                    <p>Content Here</p>
                    <div className="submit-btn">
                      <a
                        className="rbt-btn btn-gradient hover-icon-reverse"
                        href="lesson-assignments-submit.html"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Submit Assignment</span>
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
            </div>
          </div>
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

export default Lessona;
