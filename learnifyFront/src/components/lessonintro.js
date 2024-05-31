import React, { useState, useEffect } from "react";
import axios from "axios";

const Lessonintro = () => {
  const [lessonContent, setLessonContent] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [courseIntro, setCourseIntro] = useState("");

  useEffect(() => {
    // Replace with your actual API endpoint
    const fetchLessonData = async () => {
      try {
        const response = await axios.get("https://api.example.com/lesson-data");
        setLessonContent(response.data.lessonContent);
        setCourseName(response.data.courseName);
        setCourseIntro(response.data.courseIntro);
      } catch (error) {
        console.error("Error fetching lesson data:", error);
      }
    };

    fetchLessonData();
  }, []);

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Lesson - Online Courses & Education Bootstrap5 Template</title>
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
                  {lessonContent.map((lesson, index) => (
                    <div className="accordion-item card" key={index}>
                      <h2
                        className="accordion-header card-header"
                        id={`heading${index}`}
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target={`#collapse${index}`}
                          aria-controls={`collapse${index}`}
                        >
                          {lesson.title}{" "}
                          <span className="rbt-badge-5 ml--10">
                            {lesson.count}
                          </span>
                        </button>
                      </h2>
                      <div
                        id={`collapse${index}`}
                        className="accordion-collapse collapse show"
                        aria-labelledby={`heading${index}`}
                      >
                        <div className="accordion-body card-body">
                          <ul className="rbt-course-main-content liststyle">
                            {lesson.items.map((item, idx) => (
                              <li key={idx}>
                                <a href={item.link}>
                                  <div className="course-content-left">
                                    <i className={`feather-${item.icon}`} />
                                    <span className="text">{item.text}</span>
                                  </div>
                                  <div className="course-content-right">
                                    {item.duration && (
                                      <span className="min-lable">
                                        {item.duration}
                                      </span>
                                    )}
                                    <span className="rbt-check">
                                      <i
                                        className={`feather-${
                                          item.completed ? "check" : "circle"
                                        }`}
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
                <h5>{courseName}</h5>
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
                  <h4>Introduction to Our Course</h4>
                  <p>{courseIntro}</p>
                </div>
              </div>
            </div>
            <div className="bg-color-extra2 ptb--15 overflow-hidden">
              <div className="rbt-button-group">
                <a
                  className="rbt-btn icon-hover icon-hover-left btn-md bg-primary-opacity"
                  href="#"
                >
                  <span className="btn-icon">
                    <i className="feather-arrow-left" />
                  </span>
                  <span className="btn-text">Previous</span>
                </a>
                <a className="rbt-btn icon-hover btn-md" href="#">
                  <span className="btn-text">Next</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </a>
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
    </div>
  );
};

export default Lessonintro;
