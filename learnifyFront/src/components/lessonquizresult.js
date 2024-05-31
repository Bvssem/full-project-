import React, { useEffect, useState } from "react";
import axios from "axios";

const Lessonqr = () => {
  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    const fetchQuizResults = async () => {
      try {
        const response = await axios.get(
          "https://api.example.com/quiz-results"
        );
        setQuizResults(response.data);
      } catch (error) {
        console.error("Error fetching quiz results", error);
      }
    };

    fetchQuizResults();
  }, []);

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Lesson Quiz Result - Online Courses &amp;</title>
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
            {/* ... (Left sidebar content) ... */}
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
                <h5>Course name</h5>
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
                  <p className="mb--10">Quiz</p>
                  <h5>Musical Theory</h5>
                </div>
                <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
                  <table className="rbt-table table table-borderless">
                    <thead>
                      <tr>
                        <th>Quiz</th>
                        <th>Qus</th>
                        <th>TM</th>
                        <th>CA</th>
                        <th>Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quizResults.map((result, index) => (
                        <tr key={index}>
                          <th>
                            <p className="b3 mb--5">{result.date}</p>
                          </th>
                          <td>
                            <p className="b3">{result.questions}</p>
                          </td>
                          <td>
                            <p className="b3">{result.totalMarks}</p>
                          </td>
                          <td>
                            <p className="b3">{result.correctAnswers}</p>
                          </td>
                          <td>
                            <span
                              className={`rbt-badge-5 ${
                                result.passed
                                  ? "bg-color-success-opacity color-success"
                                  : "bg-color-danger-opacity color-danger"
                              }`}
                            >
                              {result.passed ? "Pass" : "Fail"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

export default Lessonqr;
