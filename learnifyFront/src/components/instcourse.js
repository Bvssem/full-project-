import React from "react";

const Instcourse = () => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="rbt-card variation-01 rbt-hover">
        <div className="rbt-card-img">
          <a href="course-details.html">
            <img
              src="assets/images/course/course-online-01.jpg"
              alt="Card image"
            />
          </a>
        </div>
        <div className="rbt-card-body">
          <div className="rbt-card-top">
            <div className="rbt-review">
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <span className="rating-count"> (15 Reviews)</span>
            </div>
            <div className="rbt-bookmark-btn">
              <a className="rbt-round-btn" title="Bookmark" href="#">
                <i className="feather-bookmark" />
              </a>
            </div>
          </div>
          <h4 className="rbt-card-title">
            <a href="course-details.html">React Front To Back</a>
          </h4>
          <ul className="rbt-meta">
            <li>
              <i className="feather-book" />
              20 Lessons
            </li>
            <li>
              <i className="feather-users" />
              40 Students
            </li>
          </ul>
          <div className="rbt-card-bottom">
            <div className="rbt-price">
              <span className="current-price">$60</span>
              <span className="off-price">$120</span>
            </div>
            <a className="rbt-btn-link left-icon" href="#">
              <i className="feather-edit" /> Edit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instcourse;
