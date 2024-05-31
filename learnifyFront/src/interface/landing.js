import React from "react";

import Card from "../components/card.js";
import { Link } from "react-router-dom";



const Landing = () => {
  
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
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

      {/* Start Header Area */}
      <div className="rbt-sticky-placeholder" />
      <a className="close_side_menu" href="javascript:void(0);" />
      <main className="rbt-main-wrapper">
        {/* Start Banner Area */}
        <div className="rbt-banner-area rbt-banner-1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 pb--120 pt--70">
                <div className="content">
                  <div className="inner">
                    <div className="rbt-new-badge rbt-new-badge-one">
                      <span className="rbt-new-badge-icon">🏆</span> The Leader
                      in Online Learning
                    </div>
                    <h1 className="title">
                      Build The Skills <br /> To Drive Your Career
                    </h1>
                    <p className="description">
                      "Empower your learning journey with interactive e-learning
                      experiences tailored to your success."
                    </p>
                    <div className="slider-btn">
                  
                                    <a class="rbt-btn btn-gradient hover-icon-reverse" href="#">
                                        <span class="icon-reverse-wrapper">
                                            <span class="btn-text">View Course</span>
                                        <span class="btn-icon"><i class="feather-arrow-right"></i></span>
                                        <span class="btn-icon"><i class="feather-arrow-right"></i></span>
                                        </span>
                                    </a>
                                </div>

                  </div>
                  <div className="shape-wrapper" id="scene">
                    <img
                      src="assets/images/banner/image10.png"
                      alt="Hero Image"
                    />
                    <div className="hero-bg-shape-1 layer" data-depth="0.4">
                      <img
                        src="assets/images/shape/shape-01.png"
                        alt="Hero Image Background Shape"
                      />
                    </div>
                    <div className="hero-bg-shape-2 layer" data-depth="0.4">
                      <img
                        src="assets/images/shape/shape-02.png"
                        alt="Hero Image Background Shape"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Banner Area */}
        <div className="rbt-categories-area bg-color-white rbt-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    CATEGORIES
                  </span>
                  <h2 className="title">
                    Explore Top Courses Caterories <br /> That Change Yourself
                  </h2>
                </div>
              </div>
            </div>
            <div className="row g-5 mt--20">
              {/* Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/web-design.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">Web Design</h5>
                      <div className="read-more-btn"></div>
                    </div>
                  </div>
                </a>
              </div>
              {/* End Category Box Layout  */}
              {/* Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/design.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">Graphic Design</h5>
                      <div className="read-more-btn"></div>
                    </div>
                  </div>
                </a>
              </div>
              {/* End Category Box Layout  */}
              {/* Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/personal.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">Personal Development</h5>
                      <div className="read-more-btn"></div>
                    </div>
                  </div>
                </a>
              </div>
              {/* End Category Box Layout  */}
              {/* Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/server.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">IT and Software</h5>
                      <div className="read-more-btn"></div>
                    </div>
                  </div>
                </a>
              </div>
              {/* End Category Box Layout  */}
              {/* Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/pantone.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">Sales Marketing</h5>
                      <div className="read-more-btn"></div>
                    </div>
                  </div>
                </a>
              </div>
              {/* End Category Box Layout  */}
              {/* Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/paint-palette.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">Art &amp; Humanities</h5>
                      <div className="read-more-btn"></div>
                    </div>
                  </div>
                </a>
              </div>
              {/* End Category Box Layout  */}
              {/* Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/smartphone.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">Mobile Application</h5>
                      <div className="read-more-btn"></div>
                    </div>
                  </div>
                </a>
              </div>
              {/* End Category Box Layout  */}
              {/* Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/infographic.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">Finance &amp; Accounting</h5>
                      <div className="read-more-btn"></div>
                    </div>
                  </div>
                </a>
              </div>
              {/* End Category Box Layout  */}
            </div>
          </div>
        </div>

        {/* Start About Area  */}
        <div className="rbt-about-area bg-color-white rbt-section-gapTop pb_md--80 pb_sm--80 about-style-1">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="thumbnail-wrapper">
                  <div className="thumbnail image-1">
                    <img
                      data-parallax='{"x": 0, "y": -20}'
                      src="assets/images/about/about-01.png"
                      alt="Education Images"
                    />
                  </div>
                  <div className="thumbnail image-2 d-none d-xl-block">
                    <img
                      data-parallax='{"x": 0, "y": 60}'
                      src="assets/images/about/about-02.png"
                      alt="Education Images"
                    />
                  </div>
                  <div className="thumbnail image-3 d-none d-md-block">
                    <img
                      data-parallax='{"x": 0, "y": 80}'
                      src="assets/images/about/about-03.png"
                      alt="Education Images"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inner pl--50 pl_sm--0 pl_md--0">
                  <div className="section-title text-start">
                    <span className="subtitle bg-coral-opacity">
                      Know About Us
                    </span>
                    <h2 className="title">
                      Know About Histudy <br /> Learning Platform
                    </h2>
                  </div>
                  <p className="description mt--30">
                    Welcome to Learnify, your gateway to a world of knowledge
                    and learning opportunities. Our platform offers flexible
                    classes designed to meet your unique learning needs,
                    empowering you to learn from anywhere at any time.
                  </p>
                  {/* Start Feature List  */}
                  <div className="rbt-feature-wrapper mt--20 ml_dec_20">
                    <div className="rbt-feature feature-style-2 rbt-radius">
                      <div className="icon bg-pink-opacity">
                        <i className="feather-heart" />
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title">Flexible Classes</h6>
                        <p className="feature-description">
                          Experience the flexibility of learning at your own
                          pace with our well-structured classes. Whether you're
                          a beginner or an advanced learner, Learnify provides a
                          conducive environment for acquiring new skills and
                          expanding your knowledge horizon
                        </p>
                      </div>
                    </div>
                    <div className="rbt-feature feature-style-2 rbt-radius">
                      <div className="icon bg-primary-opacity">
                        <i className="feather-book" />
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title">Learn From Anywhere</h6>
                        <p className="feature-description">
                          No matter where you are, Learnify makes learning
                          accessible and convenient. Our platform enables you to
                          learn on-the-go, ensuring that geographical boundaries
                          never limit your quest for knowledge.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Feature List  */}
                  <div className="about-btn mt--40">
                    <a
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">More About Us</span>
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
        {/* End About Area  */}

        {/* Start Counterup Area  */}
        <div className="rbt-counterup-area bg-color-extra2 rbt-section-gapBottom default-callto-action-overlap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    Why Choose Us
                  </span>
                  <h2 className="title">
                    Creating A Community Of <br /> Life Long Learners.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row g-5 hanger-line">
              {/* Start Single Counter  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                  <div className="top-circle-shape" />
                  <div className="inner">
                    <div className="rbt-round-icon">
                      <img
                        src="assets/images/icons/counter-01.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h3 className="counter">
                        <span className="odometer" data-count={500}>
                          100
                        </span>
                      </h3>
                      <span className="subtitle">Learners &amp; counting</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Counter  */}
              {/* Start Single Counter  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--60 mt_md--30 mt_sm--30 mt_mobile--60">
                <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                  <div className="top-circle-shape" />
                  <div className="inner">
                    <div className="rbt-round-icon">
                      <img
                        src="assets/images/icons/counter-02.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h3 className="counter">
                        <span className="odometer" data-count={800}>
                          100
                        </span>
                      </h3>
                      <span className="subtitle">Courses &amp; Video</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Counter  */}
              {/* Start Single Counter  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--60 mt_sm--60">
                <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                  <div className="top-circle-shape" />
                  <div className="inner">
                    <div className="rbt-round-icon">
                      <img
                        src="assets/images/icons/counter-03.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h3 className="counter">
                        <span className="odometer" data-count={1000}>
                          100
                        </span>
                      </h3>
                      <span className="subtitle">Certified Students</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Counter  */}
              {/* Start Single Counter  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--60 mt_md--30 mt_sm--30 mt_mobile--60">
                <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                  <div className="top-circle-shape" />
                  <div className="inner">
                    <div className="rbt-round-icon">
                      <img
                        src="assets/images/icons/counter-04.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h3 className="counter">
                        <span className="odometer" data-count={100}>
                          100
                        </span>
                      </h3>
                      <span className="subtitle">Registered Enrolls</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Counter  */}
            </div>
          </div>
        </div>
        {/* End Counterup Area  */}
        {/* Start Testimonial Area   */}
        <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--10">
                    <span className="subtitle bg-primary-opacity">
                      EDUCATION FOR EVERYONE
                    </span>
                    <h2 className="title">
                      These testimonies showcase the positive impact Learnify
                      Education has had on learners from various backgrounds.{" "}
                      <br />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-animation-wrapper no-overlay mt--50">
            <div className="scroll-animation scroll-right-left">
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/facebook.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Highly recommend Learnify for anyone looking to upskill.
                        The platform is user-friendly, and the courses are
                        designed for real-world application
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-01.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Martha Maldonado, <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/google.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Learnify has exceeded my expectations. The instructors
                        are knowledgeable, and the course content is relevant
                        and engaging
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-02.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Michael D., <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/yelp.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Our educational, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-03.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Valerie J., <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/facebook.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        People says about, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-04.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Hannah R., <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/bing.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Like this histudy, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-05.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Pearl B. Hill, <span>Marketing</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/facebook.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Educational template, vulputate at sapien sit amet,
                        auctor iaculis lorem. In vel hend rerit nisi. Vestibulum
                        eget risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-01.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Mandy F. Wood, <span>SR Designer</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
            </div>
          </div>
          <div className="scroll-animation-wrapper no-overlay mt--30">
            <div className="scroll-animation scroll-left-right">
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/facebook.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        After the launch, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-01.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Martha Maldonado, <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/google.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Histudy education, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-02.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Michael D., <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/yelp.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Our educational, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-03.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Valerie J., <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/bing.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        People says about, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-04.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Hannah R., <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/hubs.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Like this histudy, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-05.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Pearl B. Hill, <span>Marketing</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/yelp.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Educational template, vulputate at sapien sit amet,
                        auctor iaculis lorem. In vel hend rerit nisi. Vestibulum
                        eget risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-01.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Mandy F. Wood, <span>SR Designer</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/bing.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Online leaning, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-07.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Mildred W. Diaz, <span>Executive</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/facebook.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Remote learning, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-08.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Christopher, <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/yelp.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        University managemnet, vulputate at sapien sit amet,
                        auctor iaculis lorem. In vel hend rerit nisi. Vestibulum
                        eget risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-06.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Fatima, <span>Child</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
            </div>
          </div>
        </div>
        {/* End Testimonial Area   */}

        <div className="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap">
          <div className="container">
            <div className="row row--15 align-items-center">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <div className="section-title text-center">
                    <span className="subtitle bg-white-opacity">
                      Get Latest Histudy Update
                    </span>
                    <h2 className="title color-white">
                      <strong>Subscribe</strong> Our Newsletter
                    </h2>
                    <p className="description color-white mt--20"></p>
                  </div>
                  <form action="#" className="newsletter-form-1 mt--40">
                    <input type="email" placeholder="Enter Your E-Email" />
                    <button
                      type="submit"
                      className="rbt-btn btn-md btn-gradient hover-icon-reverse"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Subscribe</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </span>
                    </button>
                  </form>
                  <span className="note-text color-white mt--20">
                    No ads, No trails, No commitments
                  </span>
                  <div className="row row--15 mt--50">
                    {/* Start Single Counter */}
                    <div className="col-lg-3 offset-lg-3 col-md-6 col-sm-6 single-counter">
                      <div className="rbt-counterup rbt-hover-03 style-2 text-color-white">
                        <div className="inner">
                          <div className="content">
                            <h3 className="counter color-white">
                              <span className="odometer" data-count={500}>
                                100
                              </span>
                            </h3>
                            <h5 className="title color-white">
                              Successfully Trained
                            </h5>
                            <span className="subtitle color-white">
                              Learners &amp; counting
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Counter */}
                    {/* Start Single Counter */}
                    <div className="col-lg-3 col-md-6 col-sm-6 single-counter mt_mobile--30">
                      <div className="rbt-counterup rbt-hover-03 style-2 text-color-white">
                        <div className="inner">
                          <div className="content">
                            <h3 className="counter color-white">
                              <span className="odometer" data-count={100}>
                                100
                              </span>
                            </h3>
                            <h5 className="title color-white">
                              Certification Students
                            </h5>
                            <span className="subtitle color-white">
                              Online Course
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Counter */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* End Page Wrapper Area */}
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

export default Landing;