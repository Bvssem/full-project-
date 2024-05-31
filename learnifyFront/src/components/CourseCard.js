const CourseCard = ({ course }) => {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="rbt-card variation-01 rbt-hover">
          <div className="rbt-card-img">
            <a href="course-details.html">
              <img               src="assets/images/course/course-online-01.jpg"
 alt="assets/images/course/course-online-01.jpg" />
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
              <a href="course-details.html">{course.title}</a>
            </h4>
            <ul className="rbt-meta">
              <li>
                <i className="feather-book" /> {course.lessons} Lessons
              </li>
              <li>
                <i className="feather-users" /> {course.students} Students
              </li>
            </ul>
            <div className="rbt-card-bottom">
              <div className="rbt-price">
                <span className="current-price">${course.price}</span>
                {course.offPrice && (
                  <span className="off-price">${course.offPrice}</span>
                )}
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

  export default CourseCard;
