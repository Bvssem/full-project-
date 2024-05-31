import React, { useState } from "react";
import axios from "axios";

const AddLesson = () => {
  const [lessons, setLessons] = useState([]);
  const [lessonTitle, setLessonTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setLessonTitle(e.target.value);
  };

  const handleAddLesson = () => {
    if (lessonTitle.trim() && videoFile) {
      setLessons([...lessons, { title: lessonTitle, videoFile }]);
      setLessonTitle("");
      setVideoFile(null);
    } else {
      alert("Please enter a lesson title and upload a video.");
    }
  };

  const handleRemoveLesson = (index) => {
    const updatedLessons = [...lessons];
    updatedLessons.splice(index, 1);
    setLessons(updatedLessons);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    lessons.forEach((lesson, index) => {
      formData.append(`lessons[${index}][title]`, lesson.title);
      formData.append(`lessons[${index}][videoFile]`, lesson.videoFile);
    });

    try {
      const response = await axios.post("YOUR_API_ENDPOINT/lessons", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Lessons submitted successfully:", response.data);
    
      setLessons([]);
    } catch (error) {
      console.error("Error submitting lessons:", error);
    }
  };

  return (
    <div className="add-lesson-container">
      <h2>Add Lessons</h2>
      <form onSubmit={handleSubmit}>
        <div className="lesson-item">
          <label>
            Lesson Title:
            <input
              type="text"
              value={lessonTitle}
              onChange={handleTitleChange}
            />
          </label>
          <label>
            Video Upload:
            <input type="file" accept="video/*" onChange={handleFileChange} />
          </label>
          <button type="button" onClick={handleAddLesson}>
            Add Lesson
          </button>
        </div>
        <div className="lessons-list">
          {lessons.map((lesson, index) => (
            <div key={index} className="lesson-item">
              <p>{lesson.title}</p>
              <video controls>
                <source src={URL.createObjectURL(lesson.videoFile)} />
              </video>
              <button type="button" onClick={() => handleRemoveLesson(index)}>
                Remove Lesson
              </button>
            </div>
          ))}
        </div>
        <button type="submit" disabled={lessons.length === 0}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddLesson;
