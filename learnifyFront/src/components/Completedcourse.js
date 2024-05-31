import React from "react";

const Comlpletedcourse = () => {
  return (
<div className="col-lg-4 col-md-6 col-12">
  <div className="rbt-card variation-01 rbt-hover">
    <div className="rbt-card-img">
      <a href="course-details.html">
        <img src="assets/images/course/course-online-01.jpg" alt="Card image" />
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
          <a className="rbt-round-btn" title="Bookmark" href="#"><i className="feather-bookmark" /></a>
        </div>
      </div>
      <h4 className="rbt-card-title"><a href="course-details.html">React Front To Back</a>
      </h4>
      <ul className="rbt-meta">
        <li><i className="feather-book" />20 Lessons</li>
        <li><i className="feather-users" />40 Students</li>
      </ul>
      <div className="rbt-progress-style-1 mb--20 mt--10">
        <div className="single-progress">
          <h6 className="rbt-title-style-2 mb--10">Complete</h6>
          <div className="progress">
            <div className="progress-bar wow fadeInLeft bar-color-success" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
            </div>
            <span className="rbt-title-style-2 progress-number">90%</span>
          </div>
        </div>
      </div>
      <div className="rbt-card-bottom">
        <a className="rbt-btn btn-sm bg-primary-opacity w-100 text-center" href="#">Download Certificate</a>
      </div>
    </div>
  </div>
</div>
  );
};

export default Comlpletedcourse;
