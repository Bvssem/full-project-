// TakeQuiz.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import CustomCheckbox from './CustomCheckbox'; // Import custom checkbox component

function TakeQuiz() {
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        axios.get(`/api/quizzes/${quizId}`).then(response => setQuiz(response.data));
    }, [quizId]);

    const calculateScore = () => {
        let totalQuestions = 0;
        let correctAnswers = 0;
        quiz.questions.forEach((question, index) => {
            totalQuestions++;
            const correctChoices = question.choices.filter(choice => choice.correct).map(choice => choice.id);
            const selectedChoices = answers[index] || [];
            if (JSON.stringify(correctChoices) === JSON.stringify(selectedChoices)) {
                correctAnswers++;
            }
        });
        return (correctAnswers / totalQuestions) * 100;
    };

    const handleSubmit = () => {
        const userId = localStorage.getItem('id'); // Retrieve userId from localStorage

        const attemptData = {
            answers: JSON.stringify(answers),
            score: calculateScore()
        };

        axios.post(`/api/quizAttempts/${quizId}/${userId}`, attemptData)
            .then(response => {
                console.log('Quiz attempt stored:', response.data);
                // Display score in alert
                alert(`Your score is ${calculateScore()} %`);
                // Optionally, you can navigate to a new page or display a message indicating success
            })
            .catch(error => {
                console.error('Error storing quiz attempt:', error);
                // Handle error scenario
            });
    };

    if (!quiz) return <div>Loading...</div>;
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
                                  <Link to="/studentprofile">
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
                    <div className="quiz-container">
            <h2>{quiz.title}</h2>
            <form>
                {quiz.questions.map((question, qIdx) => (
                    <div key={question.id} className="question-container">
                        <h3>{question.text}</h3>
                        <div className="choices-container" style={{ display: 'flex', flexDirection: 'column' }}>
                            {question.choices.map(choice => (
                                <div key={choice.id} className="choice">
                                    <CustomCheckbox
                                        checked={answers[qIdx] && answers[qIdx].includes(choice.id)}
                                        onChange={e => {
                                            const newAnswers = [...answers];
                                            if (e.target.checked) {
                                                if (!newAnswers[qIdx]) newAnswers[qIdx] = [];
                                                newAnswers[qIdx].push(choice.id);
                                            } else {
                                                newAnswers[qIdx] = newAnswers[qIdx].filter(a => a !== choice.id);
                                            }
                                            setAnswers(newAnswers);
                                        }}
                                    />
                                    <span>{choice.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button type="button" onClick={handleSubmit} className="submit-button">Submit Quiz</button>
            </form>
        </div>  </div>
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

export default TakeQuiz;
