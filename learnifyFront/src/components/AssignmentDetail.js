import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './AssignmentDetail.css';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

 // Ensure you have this CSS file for custom styles

function AssignmentDetail() {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const result = await axios.get(`/api/assignments/${id}`);
        setAssignment(result.data);
      } catch (error) {
        console.error('Error fetching assignment:', error);
      }
    };

    fetchAssignment();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = localStorage.getItem('id');
    
    try {
      await Promise.all(answers.map(async (answer, index) => {
        const questionId = assignment.questions[index].id;
        await axios.post(`/api/answers/submit?questionId=${questionId}&userId=${userId}`, { answer: answer });
        toast.success("Assignment Submited")
      }));
      // Handle success, e.g., show a success message
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error submitting answers:', error);
    }
  };

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  if (!assignment) return <div>Loading...</div>;

  return (

    <div>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <title>
      Student Enrolled Courses - Online Courses & Education Bootstrap5
      Template
    </title>
    <meta name="robots" content="noindex, follow" />
    <meta name="description" content="" />
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
    <a className="close_side_menu" href="javascript:void(0);" />
    <div className="rbt-page-banner-wrapper">
      {/* Start Banner BG Image */}
      <div className="rbt-banner-image" />
      {/* End Banner BG Image */}
    </div>
    {/* Start Card Style */}
    <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Start Dashboard Top */}
            <div className="rbt-dashboard-content-wrapper">
              <div className="tutor-bg-photo bg_image bg_image--23 height-350" />
              {/* Start Tutor Information */}
              <div className="rbt-tutor-information">
                <div className="rbt-tutor-information-left">
                  <div className="thumbnail rbt-avatars size-lg">
                    <img
                      src="assets/images/team/avatar-2.jpg"
                      alt="Instructor"
                    />
                  </div>
                  <div className="tutor-content">
                    <h5 className="title">Emily Hannah</h5>
                    <ul className="rbt-meta rbt-meta-white mt--5">
                      <li>
                        <i className="feather-book" />
                      </li>
                      <li>
                        <i className="feather-award" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Tutor Information */}
            </div>
            {/* End Dashboard Top */}
            <div className="row g-5">
              <div className="col-lg-3">
                {/* Start Dashboard Sidebar */}
                <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                  <div className="inner">
                    <div className="content-item-content">
                      <div className="rbt-default-sidebar-wrapper">
                        <div className="section-title mb--20">
                          <h6 className="rbt-title-style-2">
                            Welcome, Student
                          </h6>
                        </div>
                        <nav className="mainmenu-nav">
                          <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                            <li>
                              <Link to="/studentdash">
                                <i className="feather-home" />
                                <span>Dashboard</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/profile">
                                <i className="feather-user" />
                                <span>My Profile</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/studentcourse">
                                <i className="feather-book-open" />
                                <span>Enrolled Courses</span>
                              </Link>
                            </li>
                            <li>
                                <Link to="/quizlist">
                                  <i className="feather-help-circle" />
                                  <span>Quizzes</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/assignment-list">
                                  <i className="feather-help-circle" />
                                  <span>Assignments</span>
                                </Link>
                              </li>

                              <li>
                                <Link to="/grades/user">
                                  <i className="feather-help-circle" />
                                  <span>Assignments Grades</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/my-quiz-attempts">
                                  <i className="feather-help-circle" />
                                  <span>My Quiz Attempts</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/studentannouncement">
                                  <i className="feather-help-circle" />
                                  <span>Announcements</span>
                                </Link>
                              </li>
                          
                            <li>
                              <Link to="/studentorderhistory">
                                <i className="feather-shopping-bag" />
                                <span>Order History</span>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                        <div className="section-title mt--40 mb--20">
                          <h6 className="rbt-title-style-2">User</h6>
                        </div>
                        <nav className="mainmenu-nav">
                          <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                            <li>
                              <Link to="/studentsettings">
                                <i className="feather-settings" />
                                <span>Settings</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="feather-log-out" />
                                <span>Logout</span>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Dashboard Sidebar */}
              </div>
              <div className="col-lg-9">
                {/* Start Table */}
                <div className="rbt-dashboard-table table-responsive mt--30">
                <div className="assignment-detail">
      <h2 className="assignment-title">{assignment.title}</h2>
      <form onSubmit={handleSubmit} className="answers-form">
        {assignment.questions.map((question, index) => (
          <div key={question.id} className="question-container">
            <label className="question-text">{question.text}</label>
            <input
              type="text"
              value={answers[index] || ''}
              onChange={(e) => handleAnswerChange(index, e)}
              className="answer-input"
            />
          </div>
        ))}
        <button type="submit" className="submit-button">Submit Answers</button>
      </form>
    </div>
                </div>
                {/* End Table */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Card Style */}
  </div>

    
  );
}

export default AssignmentDetail;
