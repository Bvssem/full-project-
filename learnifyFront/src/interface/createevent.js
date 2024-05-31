import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';


const CreateEvent = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventContent, setEventContent] = useState("");
  const [maximumStudents, setMaximumStudents] = useState(0);
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const [code, setCode] = useState(""); // Added state for code

  const handleCreateEvent = async () => {
    const thumbnailURL = URL.createObjectURL(thumbnail);

    try {
      const eventDataToSend = {
        eventTitle: eventTitle,
        eventContent: eventContent,
        maximumStudents: maximumStudents,
        difficultyLevel: difficultyLevel,
        eventThumbnail: thumbnailURL,
        eventIntroVideo: null,
        startDate: startDate, // Include start date
        startTime: startTime, // Include start time
        certificate: null,
        code: code // Include code in the data to send

      };

      const response = await axios.post(
        `http://localhost:8080/api/events/create?userId=${userId}`,
        eventDataToSend
      );
      toast.success('Event Created successfully')

      console.log("Event created successfully:", response.data);
      // Handle success, e.g., redirect to event details page
    } catch (error) {
      console.error("Error creating event:", error);
      // Handle error, e.g., show error message
    }
  };

  return (
    <div>
      {/* HTML structure */}

      <main className="rbt-main-wrapper">
        <div className="rbt-create-course-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8">
                {/* Form structure */}
                <div className="rbt-accordion-style rbt-accordion-01 rbt-accordion-06 accordion">
                  <div className="accordion" id="tutionaccordionExamplea1">
                    <div className="accordion-item card">
                      {/* Event Info */}
                      <h2 className="accordion-header card-header" id="accOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#accCollapseOne"
                          aria-expanded="true"
                          aria-controls="accCollapseOne"
                        >
                          Event Info
                        </button>
                      </h2>
                      <div
                        id="accCollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="accOne"
                        data-bs-parent="#tutionaccordionExamplea1"
                      >
                        <div className="accordion-body card-body">
                          {/* Start Course Field Wrapper */}
                          <div className="rbt-course-field-wrapper rbt-default-form">
                            {/* Event Title */}
                            <div className="Event Content mb--15">
                              <label htmlFor="Event Title">Event Title</label>
                              <input
                                id="field-1"
                                type="text"
                                placeholder="New Course"
                                value={eventTitle}
                                onChange={(e) => setEventTitle(e.target.value)}
                              />
                              <small className="d-block mt_dec--5">
                                <i className="feather-info" /> Title should be
                                30 characters.
                              </small>
                            </div>

                            {/* Event Content */}
                            <div className="Event Content mb--15">
                              <label htmlFor="Event content">Event content</label>
                              <textarea
                                id="aboutCourse"
                                rows={10}
                                value={eventContent}
                                onChange={(e) => setEventContent(e.target.value)}
                              />
                              <small className="d-block mt_dec--5">
                                <i className="feather-info" /> Only plain text
                                allowed, no emoji. This field is used for search,
                                so please be descriptive!
                              </small>
                            </div>

                            {/* Thumbnail */}
                            <div className="course-field mb--15">
                              <label htmlFor="Thumbnail">Thumbnail</label>
                              <input
                                type="file"
                                id="thumbnail"
                                onChange={(e) => setThumbnail(e.target.files[0])}
                              />
                              <small className="d-block mt_dec--5">
                                <i className="feather-info" /> Size: 700x430 pixels,
                                File Support: JPG, JPEG, PNG, GIF, WEBP
                              </small>
                            </div>

                            {/* Maximum Students */}
                            <div className="course-field mb--15">
                              <label htmlFor="Maximum Students">Maximum Students</label>
                              <input
                                id="field-3"
                                type="number"
                                value={maximumStudents}
                                onChange={(e) => setMaximumStudents(e.target.value)}
                              />
                              <small>
                                <i className="feather-info" /> Number of students that
                                can enroll in this event. Set 0 for no limits.
                              </small>
                            </div>

                            {/* Difficulty Level */}
                            <div className="course-field mb--15">
                              <label htmlFor="Difficulty Level">Difficulty Level</label>
                              <select
                                id="difficultyLevel"
                                value={difficultyLevel}
                                onChange={(e) => setDifficultyLevel(e.target.value)}
                              >
                                <option value="">Select</option>
                                <option value="All Levels">All Levels</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Advance">Advance</option>
                                <option value="Expert">Expert</option>
                              </select>
                              <small>
                                <i className="feather-info" /> Course difficulty level
                              </small>
                            </div>

                            {/* Start Date */}
                            <div className="course-field mb--15">
                              <label htmlFor="StartDate">Start Date</label>
                              <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                              />
                            </div>

                            {/* Start Time */}
                            <div className="course-field mb--15">
                              <label htmlFor="StartTime">Start Time</label>
                              <input
                                type="time"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                              />
                            </div>
                            <div className="course-field mb--15">
                              <label htmlFor="Code">Event Zoom Code</label>
                              <input
                                type="text"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                              />
                            </div>
                            {/* Additional Information fields */}
                            <div className="accordion-item card rbt-course-field-wrapper">
                              {/* Additional fields */}
                            </div>
                          </div>
                          {/* End Course Field Wrapper */}
                        </div>
                      </div>
                    </div>
                    {/* Additional accordion items */}
                  </div>
                </div>
                <div className="mt--10 row g-5">
                  <div className="col-lg-8">
                    {/* Create Event Button */}
                    <button
                      className="rbt-btn btn-gradient hover-icon-reverse w-100 text-center"
                      onClick={handleCreateEvent}
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Create Event</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
</span>
<span className="btn-icon">
<i className="feather-arrow-right" />
</span>
</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
);
};

export default CreateEvent;


