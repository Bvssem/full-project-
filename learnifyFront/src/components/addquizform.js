import React, { useState } from "react";
import axios from "axios";

const Addquizform = () => {
  const [questions, setQuestions] = useState([
    { question: "", options: ["", ""], correctAnswer: "" },
  ]);
  const [quizCreated, setQuizCreated] = useState(false);
  const [editableQuiz, setEditableQuiz] = useState(null);

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", ""], correctAnswer: "" },
    ]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const addOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push("");
    setQuestions(updatedQuestions);
  };

  const removeOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  return (
    <>
      {quizCreated ? (
        <div style={{ textAlign: "center" }}>
          <p>Quiz created successfully!</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post("http://your-api-endpoint.com/create-quiz", questions)
              .then((response) => {
                console.log(response.data);
                setQuizCreated(true);
                setEditableQuiz([...questions]);
              })
              .catch((error) => {
                console.error("Error creating quiz:", error);
              });
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {questions.map((question, questionIndex) => (
            <div
              key={questionIndex}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <label htmlFor={`question-${questionIndex + 1}`}>
                Question {questionIndex + 1}:
              </label>
              <input
                type="text"
                id={`question-${questionIndex + 1}`}
                value={question.question}
                onChange={(e) =>
                  handleQuestionChange(
                    questionIndex,
                    "question",
                    e.target.value
                  )
                }
                style={{ width: "100%", marginBottom: "5px" }}
                required
              />

              <label>Options:</label>
              {question.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleOptionChange(
                        questionIndex,
                        optionIndex,
                        e.target.value
                      )
                    }
                    style={{ width: "80%", marginRight: "5px" }}
                    required
                  />
                  <div style={{ marginRight: "5px" }}>
                    {optionIndex > 0 && (
                      <button
                        type="button"
                        onClick={() => removeOption(questionIndex, optionIndex)}
                        style={{ width: "30px" }}
                      >
                        {" "}
                        -
                      </button>
                    )}
                  </div>
                  <div style={{ marginRight: "5px" }}>
                    {optionIndex === question.options.length - 1 && (
                      <button
                        type="button"
                        onClick={() => addOption(questionIndex)}
                        style={{ width: "30px" }}
                      >
                        +
                      </button>
                    )}
                  </div>
                </div>
              ))}

              <label htmlFor={`correctAnswer-${questionIndex + 1}`}>
                Correct Answer:
              </label>
              <select
                id={`correctAnswer-${questionIndex + 1}`}
                value={question.correctAnswer}
                onChange={(e) =>
                  handleQuestionChange(
                    questionIndex,
                    "correctAnswer",
                    e.target.value
                  )
                }
                style={{ width: "100%", marginBottom: "10px" }}
                required
              >
                {question.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => removeQuestion(questionIndex)}
              >
                Delete Question
              </button>
            </div>
          ))}
          <button type="button" onClick={addQuestion}>
            + Add New Question
          </button>
          <button type="submit">Approve Quiz</button>
        </form>
      )}
    </>
  );
};

export default Addquizform;
