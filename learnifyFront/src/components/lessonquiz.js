import React, { useState, useEffect } from "react";
import axios from "axios";

const Lessonq = () => {
  const [courseContent, setCourseContent] = useState([]);
  const [instructor, setInstructor] = useState({});
  const [enrolledCount, setEnrolledCount] = useState(0);
  const [courseUpdate, setCourseUpdate] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(
          "https://api.example.com/course-content"
        );
        setCourseContent(response.data.content);
        setInstructor(response.data.instructor);
        setEnrolledCount(response.data.enrolledCount);
        setCourseUpdate(response.data.lastUpdate);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch course data.");
        setLoading(false);
      }
    };

    fetchCourseData();
  }, []);

  const handleFeedbackSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://api.example.com/course-feedback", { feedback });
      setFeedback("");
      alert("Feedback submitted successfully!");
    } catch (error) {
      setError("Failed to submit feedback.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
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
                {courseContent.map((section, index) => (
                  <div className="accordion-item card" key={index}>
                    <h2
                      className="accordion-header card-header"
                      id={`heading${index}`}
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded={index === 0 ? "true" : "false"}
                        data-bs-target={`#collapse${index}`}
                        aria-controls={`collapse${index}`}
                      >
                        {section.title}
                        <span className="rbt-badge-5 ml--10">
                          {section.lessons.length}
                        </span>
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      aria-labelledby={`heading${index}`}
                    >
                      <div className="accordion-body card-body">
                        <ul className="rbt-course-main-content liststyle">
                          {section.lessons.map((lesson, idx) => (
                            <li key={idx}>
                              <a href={lesson.link}>
                                <div className="course-content-left">
                                  <i className={lesson.icon} />
                                  <span className="text">{lesson.title}</span>
                                </div>
                                <div className="course-content-right">
                                  <span className="min-lable">
                                    {lesson.duration}
                                  </span>
                                  <span className="rbt-check">
                                    <i
                                      className={
                                        lesson.completed
                                          ? "feather-check"
                                          : "feather-circle"
                                      }
                                    />
                                  </span>
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr className="mt--30" />
        </div>
        <div className="rbt-lesson-rightsidebar rbt-sticky-top-adjust">
          <div className="content">
            <div className="rbt-course-feature-box rbt-shadow-box mb--30">
              <div className="rbt-course-feature-inner">
                <div className="rbt-course-info">
                  <h6 className="rbt-course-text">Course Instructor</h6>
                  <div className="rbt-course-detail">
                    <span className="rbt-course-user">
                      <i className="feather-user" />
                      <a href="#">{instructor.name}</a>
                    </span>
                  </div>
                </div>
                <div className="rbt-course-info">
                  <h6 className="rbt-course-text">Course Enrolled</h6>
                  <div className="rbt-course-detail">
                    <span className="rbt-course-user">
                      <i className="feather-user" />
                      <a href="#">{enrolledCount}</a>
                    </span>
                  </div>
                </div>
                <div className="rbt-course-info">
                  <h6 className="rbt-course-text">Course Update</h6>
                  <div className="rbt-course-detail">
                    <span className="rbt-course-user">
                      <i className="feather-calendar" />
                      <a href="#">{courseUpdate}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rbt-course-feature-box rbt-shadow-box">
              <div className="rbt-course-feature-inner">
                <h6 className="rbt-course-feature-title">Courses Feedback</h6>
                <form onSubmit={handleFeedbackSubmit}>
                  <div className="rbt-form-group">
                    <div className="rbt-course-review-star">
                      <i className="feather-star" />
                      <i className="feather-star" />
                      <i className="feather-star" />
                      <i className="feather-star" />
                      <i className="feather-star" />
                    </div>
                  </div>
                  <div className="rbt-form-group">
                    <textarea
                      name="message"
                      cols="30"
                      rows="10"
                      placeholder="Write your feedback"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                    />
                  </div>
                  <div className="rbt-form-group">
                    <button className="rbt-btn btn-gradient" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
                {error && <p className="error">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessonq;
