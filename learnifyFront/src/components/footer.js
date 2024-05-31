import React from "react";

const Footer = () => {
  return (
    <footer className="rbt-footer footer-style-1 bg-color-white overflow-hidden">
      <div className="footer-top">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/images/logo/logo.png" alt="Edu-cause" />
                  </a>
                </div>
                <p className="description mt--20">
                  We’re always in search for talented and motivated people.
                  Don’t be shy introduce yourself!
                </p>
                <ul className="social-icon social-default justify-content-start">
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
                <div className="contact-btn mt--30">
                  <a
                    className="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
                    href="/contact"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Contact Us</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                    </div>
                  </a>
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
      <div className="copyright-area copyright-style-1 ptb--20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <p className="rbt-link-hover text-center text-lg-start">
                Copyright © 2024 All Rights Reserved
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="privacy-policy.html">Privacy policy</a>
                </li>
                <li></li>
                <li>
                  <a href="/forumregister">Login &amp; Register</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Copyright Area  */}
      <div className="rbt-progress-parent">
        <svg
          className="rbt-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />{" "}
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
