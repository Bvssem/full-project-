import React from "react";

const Card = ({ course }) => {
  return (
    <div className="course-grid-3">
      <div className="rbt-card variation-01 rbt-hover">
        <div className="rbt-card-img">
          <a href="Coursedetails">
            <img
              src="assets/images/course/course-online-01.jpg"
              alt="Card image"
            />
            <div className="rbt-badge-3 bg-white">
              <span>-40%</span>
              <span>Off</span>
            </div>
          </a>
        </div>
        <div className="rbt-card-body">
          <div className="rbt-card-top">
            <div className="rbt-review">
             
            </div>
            <div className="rbt-bookmark-btn">
              <a className="rbt-round-btn" title="Bookmark" href="#">
                <i className="feather-bookmark" />
              </a>
            </div>
          </div>
          <h4 className="rbt-card-title">
            <a href="course-details.html">{course.title}</a>
          </h4>
          <ul className="rbt-meta">
            <li>
              <i className="feather-book" />
              1 Lessons
            </li>
         
          </ul>
          <p className="rbt-card-text">
            {course.description}
          </p>
          <div className="rbt-author-meta mb--10">
            <div className="rbt-avater">
              <a href="#">
                <img
                  src="assets/images/client/avatar-02.png"
                  alt="Sophia Jaymes"
                />
              </a>
            </div>
            <div className="rbt-author-info">
              By <a href="profile.html">Instructor</a> 
              
            </div>
          </div>
          <div className="rbt-card-bottom">
            <div className="rbt-price">
              <span className="current-price">{course.price}</span>
             
            </div>
            <a className="rbt-btn-link" href="Coursedetails">
              Learn More
              <i className="feather-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
