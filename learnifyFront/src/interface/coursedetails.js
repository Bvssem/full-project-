import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import VideoPreview from "../components/videopreview";

const Coursedetails = () => {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/createcourse");
        setCourseData(response.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Course Details - Online Courses &amp;</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <a className="close_side_menu" href="javascript:void(0);" />
      <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
        <div className="breadcrumb-inner">
          <img src="assets/images/bg/bg-image-10.jpg" alt="Education Images" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content text-start">
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <a href="Landing">Home</a>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right" />
                    </div>
                  </li>
                </ul>
                <h2 className="Course Title">Course Title </h2>
                <p className="description">About course</p>
                <div className="d-flex align-items-center mb--20 flex-wrap rbt-course-details-feature">
                  <div className="feature-sin best-seller-badge">
                    <span className="rbt-badge-2">
                      <span className="image">
                        <img
                          src="assets/images/icons/card-icon-1.png"
                          alt="Best Seller Icon"
                        />
                      </span>{" "}
                      Bestseller
                    </span>
                  </div>
                  <div className="feature-sin rating">
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </div>
                  <div className="feature-sin total-rating">
                    <a className="rbt-badge-4" href="#"></a>
                  </div>
                  <div className="feature-sin total-student"></div>
                </div>
                <div className="rbt-author-meta mb--20">
                  <div className="rbt-avater">
                    <a href="#">
                      <img
                        src="assets/images/client/avatar-02.png"
                        alt="Sophia Jaymes"
                      />
                    </a>
                  </div>
                  <div className="Instructor Username">
                    By <a href=""></a>
                  </div>
                </div>
                <ul className="rbt-meta">
                  <li>
                    <i className="feather-globe" />
                    English
                  </li>
                  <li>
                    <i className="feather-award" />
                    Certified Course
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb Area */}
      <div className="rbt-course-details-area ptb--60">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="course-details-content">
                <div className="rbt-course-feature-box rbt-shadow-box thuumbnail">
                  <img
                    className="w-100"
                    src="assets/images/course/course-01.jpg"
                    alt="Card image"
                  />
                </div>
                <div className="rbt-inner-onepage-navigation sticky-top mt--30">
                  <nav className="mainmenu-nav onepagenav">
                    <ul className="mainmenu">
                      <li className="current">
                        <a href="#overview">Overview</a>
                      </li>
                      <li>
                        <a href="#coursecontent">Course Content</a>
                      </li>
                      <li>
                        <a href="#details">Details</a>
                      </li>
                      <li>
                        <a href="#intructor">Intructor</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* Start Course Feature Box  */}
                <div
                  className="rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more"
                  id="overview"
                >
                  <div className="rbt-course-feature-inner has-show-more-inner-content">
                    <div className="section-title">
                      <h4 className="rbt-title-style-3">What you'll learn</h4>
                    </div>
                    <p className=""></p>
                    <div className="row g-5 mb--30">
                      {/* Start Feture Box  */}

                      {/* End Feture Box  */}
                      {/* Start Feture Box  */}

                      {/* End Feture Box  */}
                    </div>
                    <p>
                  
                    </p>
                  </div>
                  <div className="rbt-show-more-btn">Show More</div>
                </div>
                {/* End Course Feature Box  */}
                {/* Start Course Content  */}
                <div
                  className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
                  id="coursecontent"
                >
                  <div className="rbt-course-feature-inner">
                    <div className="section-title">
                      <h4 className="rbt-title-style-3">Course Content</h4>
                    </div>
                    <div className="rbt-accordion-style rbt-accordion-02 accordion">
                      <div className="accordion" id="accordionExampleb2">
                        <div className="accordion-item card">
                          <h2
                            className="accordion-header card-header"
                            id="headingTwo2"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo2"
                              aria-expanded="false"
                              aria-controls="collapseTwo2"
                            >
                              Course Title{" "}
                              <span className="rbt-badge-5 ml--10"></span>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo2"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo2"
                            data-bs-parent="#accordionExampleb2"
                          >
                            <div className="accordion-body card-body pr--0">
                              <ul className="rbt-course-main-content liststyle">
                                <li>
                                  <a href="lesson.html">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="Course Intro">Course Intro</span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                 
                                </li>
                                <li>
                                  <a href="lesson">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">
                                        Lesson title{" "}
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
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
                {/* End Course Content  */}
                {/* Start Course Feature Box  */}
                <div
                  className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30"
                  id="details"
                >
                  <div className="row g-5">
                    {/* Start Feture Box  */}
                    <div className="col-lg-6">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3 mb--20">
                          Requirements
                        </h4>
                      </div>
                      <ul className="rbt-list-style-1">
                        <li>
                          <i className="feather-check" />
                        </li>
                      </ul>
                    </div>
                    {/* End Feture Box  */}
                    {/* Start Feture Box  */}

                    {/* End Feture Box  */}
                  </div>
                </div>
                {/* End Course Feature Box  */}
                {/* Start Intructor Area  */}
                <div
                  className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30"
                  id="intructor"
                >
                  <div className="about-author border-0 pb--0 pt--0">
                    <div className="section-title mb--30">
                      <h4 className="rbt-title-style-3">Instructor</h4>
                    </div>
                    <div className="media align-items-center">
                      <div className="thumbnail">
                        <a href="#">
                          <img
                            src="assets/images/testimonial/testimonial-7.jpg"
                            alt="Author Images"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <div className="author-info">
                          <h5 className="title">
                            <a
                              className="hover-flip-item-wrapper"
                              href="author.html"
                            >
                              Instuctor name
                            </a>
                          </h5>
                          <span className="b3 subtitle"> Educator</span>
                          <ul className="rbt-meta mb--20 mt--10">
                            <li>
                              <a href="#">
                                <i className="feather-video" />
                                Courses Number
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="content">
                          <p className="description">Instructor description</p>
                          <ul className="social-icon social-default icon-naked justify-content-start">
                            <li>
                              <a href="https://www.facebook.com/">
                                <i className="feather-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.twitter.com">
                                <i className="feather-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/">
                                <i className="feather-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkdin.com/">
                                <i className="feather-linkedin" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Intructor Area  */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
                <div className="inner">
                  {/* Start Viedo Wrapper  */}
                  <VideoPreview />
                  {/* End Viedo Wrapper  */}
                  <div className="content-item-content">
                    <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
                      <div className="rbt-price">
                        <span className="current-price">Price</span>
                      </div>
                    </div>
                    <div className="add-to-card-button mt--15">
                      <a
                        className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
                        href="Cart"
                      >
                        <span className="btn-text">Add to Cart</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </a>
                    </div>
                    <div className="buy-now-btn mt--15">
                      <a
                        className="rbt-btn btn-border icon-hover w-100 d-block text-center"
                        href="#"
                      >
                        <span className="btn-text">Buy Now</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </a>
                    </div>
                    <span className="subtitle">
                      <i className="feather-rotate-ccw" />
                    </span>
                    <div className="rbt-widget-details has-show-more">
                      <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
                        <li>
                          <span>Skill Level</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            Basic
                          </span>
                        </li>
                        <li>
                          <span>Language</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            English
                          </span>
                        </li>

                        <li>
                          <span>Certificate</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            Yes
                          </span>
                        </li>
                      </ul>
                      <div className="rbt-show-more-btn">Show More</div>
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
      {/* Start Course Action Bottom  */}
      {/* End Course Action Bottom  */}

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

export default Coursedetails;
