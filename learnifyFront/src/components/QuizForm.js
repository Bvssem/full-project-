import React, { useState,useEffect } from 'react';
import axios from 'axios';
import CustomCheckbox from './CustomCheckbox'; // Import custom checkbox component
import './QuizForm.css';
import { useNavigate,Link } from 'react-router-dom';
import { toast } from 'react-toastify';

 // Import CSS file for quiz form styling

function QuizForm() {
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState('');
    const userId = localStorage.getItem('id');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/courses/user/${userId}/approved`)
            .then(response => {
                setCourses(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the courses!', error);
            });
    }, []);

    const addQuestion = () => {
        setQuestions([...questions, { text: '', choices: [] }]);
    };

    const handleQuestionTextChange = (index, text) => {
        const newQuestions = [...questions];
        newQuestions[index].text = text;
        setQuestions(newQuestions);
    };

    const addChoice = (questionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].choices.push({ text: '', correct: false });
        setQuestions(newQuestions);
    };

    const handleChoiceTextChange = (questionIndex, choiceIndex, text) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].choices[choiceIndex].text = text;
        setQuestions(newQuestions);
    };

    const handleChoiceCorrectChange = (questionIndex, choiceIndex, isChecked) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].choices[choiceIndex].correct = isChecked;
        setQuestions(newQuestions);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newQuiz = {
            title,
            questions: questions.map(question => ({
                ...question,
                choices: question.choices
            }))
        };

        axios.post(`http://localhost:8080/api/quizzes/${userId}/${selectedCourseId}`, newQuiz)
            .then(response => {
                alert('Quiz created successfully');
                setTitle('');
                setQuestions([{ text: '', choices: [{ text: '', correct: false }] }]);
                setSelectedCourseId('');
            })
            .catch(error => {
                console.error('There was an error creating the quiz!', error);
            });
    };

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
                        src="assets/images/team/avatar.jpg"
                        alt="Instructor"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="Instructor username">Instructor</h5>
                    </div>
                  </div>
                  <div className="rbt-tutor-information-right">
                    {/* Add Announcement Button */}
                    <div className="mb-3">
          
        </div>

      {/* Announcement Modal */}
      
                    <div className="tutor-btn">
                      <a
                        className="rbt-btn btn-md hover-icon-reverse"
                        href="/createcourse"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Create a New Course</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="rbt-tutor-information-right">
                    <div className="tutor-btn">
                      <a
                        className="rbt-btn btn-md hover-icon-reverse"
                        href="/createevent"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Create a New Event</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                        </span>
                      </a>
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
                              Welcome, Instructor
                            </h6>
                          </div>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                              <li>
                                <Link to="/instructordash">
                                  <i className="feather-home" />
                                  <span>Dashboard</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/instructorprofile">
                                  <i className="feather-user" />
                                  <span>My Profile</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/Instructorcourses">
                                  <i className="feather-book-open" />
                                  <span>My Courses</span>
                                </Link>
                              </li>

                              <li>
                                <Link to="/create-quiz">
                                  <i className="feather-message-square" />
                                  <span>Quiz Management</span>
                                </Link>
                              </li>

                              <li>
                                <Link to="/instructor-quizzes">
                                  <i className="feather-message-square" />
                                  <span>My Quizzes</span>
                                </Link>
                              </li>

                              <li>
                                <Link to="/quiz-attempts">
                                  <i className="feather-message-square" />
                                  <span>Quiz Attempts</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/createassignment">
                                  <i className="feather-list" />
                                  <span>Assignments Management</span>
                                </Link>
                              </li>

                              <li>
                                <Link to="/My-Assigments">
                                  <i className="feather-list" />
                                  <span> My Assignments </span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/grades/instructor
">
                                  <i className="feather-list" />
                                  <span> Grades Given </span>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                          <div className="section-title mt--40 mb--20">
                            <h6 className="rbt-title-style-2">Instructor</h6>
                          </div>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                              <li>
                                <Link to="/instructorcourses">
                                  <i className="feather-monitor" />
                                  <span>My Courses</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/events">
                                  <i className="feather-book-open" />
                                  <span>My Events</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/instructorannouncement">
                                  <i className="feather-volume-2" />
                                  <span>Announcements</span>
                                </Link>
                              </li>

                              <li>
                                <Link to="/instructor-quiz-attempts">
                                  <i className="feather-message-square" />
                                  <span>Quiz Attempts</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/instructorassignments">
                                  <i className="feather-list" />
                                  <span>Assignments</span>
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
                                <Link to="/instructorsettings">
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
                  <div className="quiz-form-container">
            <h2>Create a Quiz</h2>
            <input
                type="text"
                placeholder="Quiz Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="quiz-title-input"
            />
            <select
                value={selectedCourseId}
                onChange={e => setSelectedCourseId(e.target.value)}
                className="course-select"
            >
                <option value="" disabled>Select a course</option>
                {courses.map(course => (
                    <option key={course.id} value={course.id}>
                        {course.title}
                    </option>
                ))}
            </select>
            <button onClick={addQuestion} className="add-question-button">Add Question</button>
            {questions.map((q, qIdx) => (
                <div key={qIdx} className="question-container">
                    <input
                        type="text"
                        placeholder="Question Text"
                        value={q.text}
                        onChange={e => handleQuestionTextChange(qIdx, e.target.value)}
                        className="question-text-input"
                    />
                    <button onClick={() => addChoice(qIdx)} className="add-choice-button">Add Choice</button>
                    {q.choices.map((choice, cIdx) => (
                        <div key={cIdx} className="choice-container">
                            <input
                                type="text"
                                placeholder="Choice Text"
                                value={choice.text}
                                onChange={e => handleChoiceTextChange(qIdx, cIdx, e.target.value)}
                                className="choice-text-input"
                            />
                            <label className="correct-label">
                                Correct ?
                                <CustomCheckbox
                                    checked={choice.correct}
                                    onChange={e => handleChoiceCorrectChange(qIdx, cIdx, e.target.checked)}
                                />
                            </label>
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit} className="submit-button">Submit Quiz</button>
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

export default QuizForm;
