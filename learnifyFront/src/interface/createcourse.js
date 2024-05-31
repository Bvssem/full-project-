import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';



const Createcourse = () => {
 

  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const [videoUrl, setVideoUrl] = useState("");
  const [youtubeVideoId, setYoutubeVideoId] = useState("");
  const [videoSource, setVideoSource] = useState("");
  const [courseData, setCourseData] = useState({
    title: "",
    slug: "",
    about: "",
    maxStudents: 0,
    difficulty: "",
    categories: "",
    courseThumbnail: "", // For storing the file object
    price: 0,
    isFree: false,
    videoSource: videoSource,
    youtubeVideoId: youtubeVideoId,
    startDate: "",
    language: "",
    requirements: "",
    description: "",
    durationHours: "",
    durationMinutes: "",
    targetedAudience: "",
    introVideoPath: "",
    content:""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setCourseData({ ...courseData, [name]: newValue });
  };


  const handleVideoSourceChange = (e) => {
    const selectedSource = e.target.value;
    setVideoSource(selectedSource);
    setVideoUrl("");
    setYoutubeVideoId(""); // Reset YouTube Video ID when changing source
  };

  const handleYoutubeVideoIdChange = (e) => {
    setYoutubeVideoId(e.target.value);
    setVideoUrl(""); // Reset video URL when changing YouTube Video ID
  };

  const handleFileChangethumbnail = (e) => {
    const file = e.target.files[0]; // Get the selected file
  
    // Create a URL for the selected file
    const fileURL = URL.createObjectURL(file);
    
    // Set the file URL in the state
    setCourseData({ ...courseData, courseThumbnail: fileURL });
  };

  const handleFileChangeintrovideolocal = (e) => {
    const file = e.target.files[0];
    // Assuming file is an object with a property 'path' containing the local file path
    const localFilePath = file.path; // Adjust this according to the structure of your file object
    setCourseData({ ...courseData, introVideoPath: localFilePath });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/api/courses/save?userId=${userId}`, courseData);
      console.log(courseData); // Assuming backend returns success message
      // Reset form data after successful submission
      
      setCourseData({
        title: "",
        slug: "",
        about: "",
        maxStudents: 0,
        difficulty: "",
        categories: "",
        thumbnail: "", // For storing the file object
        price: 0,
        videoSource: "",
        youtubeVideoId: "",
        startDate: "",
        language: "",
        requirements: "",
        description: "",
        durationHours: "",
        durationMinutes: "",
        targetedAudience: "",
        content:""

      });
      toast.success('Course Created successfully')

    } catch (error) {
      console.error("Error creating course:", error);
      // Handle error display to the user
    }
  };
  
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Create Course - Online Courses &amp; Education Bootstrap5 Template
      </title>
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
      <a className="close_side_menu" href="javascript:void(0);" />
      <main className="rbt-main-wrapper">
        <div className="rbt-create-course-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="rbt-accordion-style rbt-accordion-01 rbt-accordion-06 accordion">
                  <div className="accordion" id="tutionaccordionExamplea1">
                  <form onSubmit={handleSubmit}>
      <div className="accordion-item card">
        <h2 className="accordion-header card-header" id="accOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accCollapseOne"
            aria-expanded="true"
            aria-controls="accCollapseOne"
          >
            Course Info
          </button>
        </h2>
        <div
          id="accCollapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="accOne"
          data-bs-parent="#tutionaccordionExamplea1"
        >
          <div className="accordion-body card-body">
            <div className="rbt-course-field-wrapper rbt-default-form">
              <div className="course-field mb--15">
              <label htmlFor="title">Course Title</label>
            <input
              id="title"
              type="text"
              placeholder="New Course"
              name="title"
              value={courseData.title}
              onChange={handleChange}
            />
                <small className="d-block mt_dec--5">
                  <i className="feather-info" /> Title should be 30 characters.
                </small>
              </div>

              <div className="course-field mb--15">
              <label htmlFor="slug">Course Slug</label>
            <input
              id="slug"
              type="text"
              placeholder="new-course"
              name="slug"
              value={courseData.slug}
              onChange={handleChange}
            />
                <small className="d-block mt_dec--5">
                  <i className="feather-info" /> Permalink:{" "}
                  <a href={`https://yourdomain.com/${courseData.slug}`}>
                    https://yourdomain.com/{courseData.slug}
                  </a>
                </small>
              </div>

              <div className="course-field mb--15">
              <label htmlFor="about">About Course</label>
            <textarea
              id="about"
              rows={10}
              name="about"
              value={courseData.about}
              onChange={handleChange}
            />
                <small className="d-block mt_dec--5">
                  <i className="feather-info" /> HTML or plain text allowed, no emoji. This field is used for search, so please be descriptive!
                </small>
              </div>

              <div className="course-field mb--15 edu-bg-gray">
                <h6>Course Settings</h6>
                <div className="rbt-course-settings-content">
                  <div className="row g-5">
                    <div className="col-lg-4">
                      <div className="advance-tab-button advance-tab-button-1">
                        <ul
                          className="rbt-default-tab-button nav nav-tabs"
                          id="courseSetting"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <a
                              href="#"
                              className="active"
                              id="general-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#general"
                              role="tab"
                              aria-controls="general"
                              aria-selected="true"
                            >
                              <span>General</span>
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              href="#"
                              id="content-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#content"
                              role="tab"
                              aria-controls="content"
                              aria-selected="false"
                            >
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade advance-tab-content-1 active show"
                          id="general"
                          role="tabpanel"
                          aria-labelledby="general-tab"
                        >
                          <div className="course-field mb--20">
                          <label htmlFor="maxStudents">Maximum Students</label>
                            <div className="pro-quantity">
                              <div className="pro-qty m-0">
                              <input
              id="maxStudents"
              type="text"
              placeholder="0"
              name="maxStudents"
              value={courseData.maxStudents}
              onChange={handleChange}
            />
                              </div>
                            </div>
                            <small>
                              <i className="feather-info" /> Number of students that can enroll in this course. Set 0 for no limits.
                            </small>
                          </div>

                          <div className="course-field mb--20">
                          <label htmlFor="difficulty">Difficulty Level</label>
                            <div className="rbt-modern-select bg-transparent height-45 mb--10">
                            <select
                className="w-100"
                id="difficulty"
                name="difficulty"
                value={courseData.difficulty}
                onChange={handleChange}
              >
                <option value="">Select Difficulty</option>
                <option value="All Levels">All Levels</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Beginner">Beginner</option>
                <option value="Advance">Advance</option>
                <option value="Expert">Expert</option>
              </select>
                            </div>
                            <small>
                              <i className="feather-info" /> Course difficulty level
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="course-field mb--15 edu-bg-gray">
                <h6>Course Price</h6>
                <div className="rbt-course-settings-content">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="advance-tab-button advance-tab-button-1">
                        <ul
                          className="rbt-default-tab-button nav nav-tabs"
                          id="coursePrice"
                          role="tablist"
                        >
                          <li className="nav-item w-100" role="presentation">
                            <a
                              href="#"
                              className="active"
                              id="paid-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#paid"
                              role="tab"
                              aria-controls="paid"
                              aria-selected="true"
                            >
                              <span>Paid</span>
                            </a>
                          </li>
                          <li className="nav-item w-100" role="presentation">
                            <a
                              href="#"
                              id="free-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#free"
                              role="tab"
                              aria-controls="free"
                              aria-selected="false"
                            >
                              <span>Free</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade advance-tab-content-1 active show"
                          id="paid"
                          role="tabpanel"
                          aria-labelledby="paid-tab"
                        >
                          <div className="course-field mb--15">
                            <label htmlFor="price">Regular Price ($)</label>
                            <input
                              id="price"
                              type="number"
                              placeholder="$ Regular Price"
                              name="price"
                              value={courseData.price}
                              onChange={handleChange}
                            />
                            <small className="d-block mt_dec--5">
                              <i className="feather-info" /> The Course Price Includes Your Author Fee.
                            </small>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade advance-tab-content-1"
                          id="free"
                          role="tabpanel"
                          aria-labelledby="free-tab"
                        >
                          <div className="course-field">
                            <p className="b3">This Course is free for everyone.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="course-field mb--20">
  <h6>Choose Category</h6>
  <div className="rbt-modern-select bg-transparent height-45 w-100 mb--10">
  <select
                className="w-100"
                id="categories"
                name="categories"
                value={courseData.categories}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option value="Web Developer">Web Developer</option>
                <option value="App Developer">App Developer</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
                <option value="WordPress">WordPress</option>
                <option value="jQuery">jQuery</option>
                <option value="Vue Js">Vue Js</option>
                <option value="Angular">Angular</option>
              </select>
  </div>
</div>

              <div className="course-field mb--20">
                <h6>Course Thumbnail</h6>
                <div className="rbt-create-course-thumbnail upload-area">
              <div className="upload-area">
                <div
                  className="brows-file-wrapper"
                  data-black-overlay={9}
                >
                  <input
                    name="thumbnail"
                    id="thumbnail"
                    type="file"
                    className="inputfile"
                    onChange={handleFileChangethumbnail}
                  />
                  <img
                    id="createfileImage"
                    src="assets/images/others/thumbnail-placeholder.svg"
                    alt="file image"
                  />
                  <label
                    className="d-flex"
                    htmlFor="thumbnail"
                    title="Nofile chosen"
                    >
                    <i className="feather-upload" />
                    <span className="text-center">
                    Choose a File
                    </span>
                    </label>
                    </div>
                    </div>
                    </div>
                    <small>
                    <i className="feather-info" /> <b>Size:</b> 700x430 pixels, <b>File Support:</b> JPG, JPEG, PNG, GIF, WEBP
                    </small>
                    </div>
              
            </div>
          </div>
        </div>
      </div>
     
                    <div className="accordion-item card">
                      <h2 className="accordion-header card-header" id="accTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#accCollapseTwo"
                          aria-expanded="false"
                          aria-controls="accCollapseTwo"
                        >
                          Course Intro Video
                        </button>
                      </h2>
                      <div
                        id="accCollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="accTwo"
                        data-bs-parent="#tutionaccordionExamplea1"
                      >
                        <div className="accordion-body card-body rbt-course-field-wrapper rbt-default-form">
                          <div className="course-field mb--20">
                            <div className="rbt-modern-select bg-transparent height-45 mb--10">
                              <select
                                className="w-100"
                                id="field-5"
                                onChange={handleVideoSourceChange}
                                value={videoSource}
                              >
                                <option value="" disabled>
                                  Select Video Source
                                </option>
                                <option value="youtube">YouTube</option>
                                <option value="local">Local</option>
                              </select>
                            </div>
                          </div>
                          {videoSource === "youtube" && (
              <div className="course-field mb--15">
                <label htmlFor="youtubeVideoId">
                  Add Your YouTube Video ID
                </label>
                <input
                  id="youtubeVideoId"
                  type="text"
                  placeholder="Add Your YouTube Video ID here."
                  value={youtubeVideoId}
                  onChange={handleYoutubeVideoIdChange}
                  name="youtubeVideoId"
                />
                {youtubeVideoId && (
                  <iframe
                    title="YouTube Video"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                    frameBorder="0"
                    allowFullScreen
                  />
                )}
              </div>
            )}
            {videoSource === "local" && (
              <div className="course-field mb--15">
                <label htmlFor="localVideo">
                  Upload Video from Your Device
                </label>
                <input
                  id="localVideo"
                  type="file"
                  accept="video/*"
                  onChange={handleFileChangeintrovideolocal}
                />
              </div>
                          )}
                          <div className="course-field mb--15">
                            <button
                              className="rbt-btn btn-md btn-gradient hover-icon-reverse"
                              type="button"
                            >
                              Edit
                            </button>
                            {/* Add some space between the buttons */}
                            <span style={{ margin: "0 5px" }}></span>
                            <button
                              className="rbt-btn btn-md btn-gradient hover-icon-reverse"
                              type="button"
                            >
                              Approve
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="accordion-item card">
        <h2 className="accordion-header card-header" id="accThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accCollapseThree"
            aria-expanded="false"
            aria-controls="accCollapseThree"
          >
            Course Content
          </button>
        </h2>
        <div
          id="accCollapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="accThree"
          data-bs-parent="#tutionaccordionExamplea1"
        >
          <div className="col-lg-6">
              <div className="course-field mb--15">
                <label htmlFor="startDate">Content</label>
                <input
            type="textarea"
            id="content"
            name="content"
            value={courseData.content}
            onChange={handleChange}
          />
              </div>
              </div>

        </div>
      </div>
      <div className="accordion-item card rbt-course-field-wrapper">
        <h2 className="accordion-header card-header" id="accSix">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accCollapseSix"
            aria-expanded="false"
            aria-controls="accCollapseSix"
          >
            Additional Information
          </button>
        </h2>
        <div
          id="accCollapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="accSix"
          data-bs-parent="#tutionaccordionExamplea1"
        >
          <div className="accordion-body card-body rbt-course-field-wrapper rbt-default-form row row-15">
            <div className="col-lg-6">
              <div className="course-field mb--15">
                <label htmlFor="startDate">Start Date</label>
                <input
            type="date"
            id="startDate"
            name="startDate"
            value={courseData.startDate}
            onChange={handleChange}
          />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="course-field mb--15">
                <label htmlFor="language">Language</label>
                <div className="rbt-modern-select bg-transparent height-50 mb--10">
                <select
              className="w-100"
              id="language"
              name="language"
              value={courseData.language}
              onChange={handleChange}
              multiple
            >
              <option>English</option>
              <option>Bangla</option>
              <option>Japan</option>
              <option>Hindi</option>
              <option>French</option>
              <option>German</option>
            </select>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="course-field mb--15">
                <label htmlFor="requirements">Requirements</label>
                <textarea
            id="requirements"
            rows={5}
            name="requirements"
            placeholder="Add your course benefits here."
            value={courseData.requirements}
            onChange={handleChange}
          />
                <small className="d-block mt_dec--5">
                  <i className="feather-info" /> Enter for per line.
                </small>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="course-field mb--15">
                <label htmlFor="description">Description</label>
                <textarea
            id="description"
            rows={5}
            name="description"

            placeholder="Add your course benefits here."
            value={courseData.description}
            onChange={handleChange}
          />
                <small className="d-block mt_dec--5">
                  <i className="feather-info" /> Enter for per line.
                </small>
              </div>
            </div>
            <div className="col-lg-12">
              <hr className="mt--10 mb--20" />
            </div>
            <div className="col-lg-12">
              <div className="course-field mb--15">
                <label>Total Course Duration</label>
                <div className="row row--15">
                  <div className="col-lg-6">
                  <input
                type="number"
                placeholder="00"
                value={courseData.durationHours}
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    durationHours: e.target.value,
                  })
                }
              />
                    <small className="d-block mt_dec--5">
                      <i className="feather-info" /> Hour.
                    </small>
                  </div>
                  <div className="col-lg-6">
                  <input
                type="number"
                placeholder="00"
                value={courseData.durationMinutes}
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    durationMinutes: e.target.value,
                  })
                }
              />
                    <small className="d-block mt_dec--5">
                      <i className="feather-info" /> Minute.
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <hr className="mt--10 mb--20" />
            </div>
            <div className="col-lg-12">
              <div className="course-field mb--15">
                <label htmlFor="targeted">Targeted Audience</label>
                <textarea
                                name="targetedAudience"

            id="targeted"
            rows={5}
            placeholder="Add your course tag here."
            value={courseData.targetedAudience}
            onChange={handleChange}
          />
                <small className="d-block mt_dec--5">
                  <i className="feather-info" /> Specify the target audience
                  that will benefit the most from the course.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
                    <div className="accordion-item card">
                      <h2
                        className="accordion-header card-header"
                        id="accSeven"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#accCollapseEight"
                          aria-expanded="false"
                          aria-controls="accCollapseEight"
                        >
                          Certificate Template
                        </button>
                      </h2>
                      <div
                        id="accCollapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="accSeven"
                        data-bs-parent="#tutionaccordionExamplea1"
                      >
                        <div className="accordion-body card-body">
                          <div className="advance-tab-button advance-tab-button-1">
                            <ul
                              className="rbt-default-tab-button nav nav-tabs"
                              id="myTab"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <a
                                  href="#"
                                  className="active"
                                  id="landscape-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#landscape"
                                  role="tab"
                                  aria-controls="landscape"
                                  aria-selected="true"
                                >
                                  <span>Landscape</span>
                                </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a
                                  href="#"
                                  id="portrait-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#portrait"
                                  role="tab"
                                  aria-controls="portrait"
                                  aria-selected="false"
                                >
                                  <span>Portrait</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="tab-content">
                                <div
                                  className="tab-pane fade advance-tab-content-1 active show"
                                  id="landscape"
                                  role="tabpanel"
                                  aria-labelledby="landscape-tab"
                                >
                                  <div className="row g-5 mt--10">
                                   
                                
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="option3"
                                          name="radio-group"
                                          defaultValue="option3"
                                        />
                                        <label htmlFor="option3">
                                          <img
                                            src="assets/images/others/preview-02.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="option4"
                                          name="radio-group"
                                          defaultValue="option4"
                                        />
                                        <label htmlFor="option4">
                                          <img
                                            src="assets/images/others/preview-03.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="option6"
                                          name="radio-group"
                                          defaultValue="option6"
                                        />
                                        <label htmlFor="option6">
                                          <img
                                            src="assets/images/others/preview-05.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade advance-tab-content-1"
                                  id="portrait"
                                  role="tabpanel"
                                  aria-labelledby="portrait-tab"
                                >
                                  <div className="row g-5 mt--10">
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="optionport1"
                                          name="radio-group"
                                          defaultValue="optionport1"
                                        />
                                        <label htmlFor="optionport1">
                                          <img
                                            src="assets/images/icons/certificate-none-portrait.svg"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="optionport2"
                                          name="radio-group"
                                          defaultValue="optionport2"
                                        />
                                        <label htmlFor="optionport2">
                                          <img
                                            src="assets/images/others/preview-port-01.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="optionport3"
                                          name="radio-group"
                                          defaultValue="optionport3"
                                        />
                                        <label htmlFor="optionport3">
                                          <img
                                            src="assets/images/others/preview-port-02.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="optionport4"
                                          name="radio-group"
                                          defaultValue="optionport4"
                                        />
                                        <label htmlFor="optionport4">
                                          <img
                                            src="assets/images/others/preview-port-03.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="optionport5"
                                          name="radio-group"
                                          defaultValue="optionport5"
                                        />
                                        <label htmlFor="optionport5">
                                          <img
                                            src="assets/images/others/preview-port-05.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="optionport6"
                                          name="radio-group"
                                          defaultValue="optionport6"
                                        />
                                        <label htmlFor="optionport6">
                                          <img
                                            src="assets/images/others/preview-port-06.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Course</button>
                    
               </form>
                  </div>
                </div>

              
                <div className="mt--10 row g-5">
                  <div className="col-lg-4">
                  
                  </div>
                  <div className="col-lg-8">
                    <a
                      className="rbt-btn btn-gradient hover-icon-reverse w-100 text-center"
                      href="#"
                    >
                     
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="rbt-create-course-sidebar course-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                  <div className="inner">
                    <div className="section-title mb--30">
                      <h4 className="title">Course Upload Tips</h4>
                    </div>
                    <div className="rbt-course-upload-tips">
                      <ul className="rbt-list-style-1">
                        <li>
                          <i className="feather-check" /> Set the Course Price
                          option or make it free.
                        </li>
                        <li>
                          <i className="feather-check" /> Standard size for the
                          course thumbnail is 700x430.
                        </li>
                        <li>
                          <i className="feather-check" /> Video section controls
                          the course overview video.
                        </li>
                        <li>
                          <i className="feather-check" /> Course Builder is
                          where you create &amp; organize a course.
                        </li>
                        <li>
                          <i className="feather-check" /> Add Topics in the
                          Course Builder section to create lessons, quizzes, and
                          assignments.
                        </li>
                        <li>
                          <i className="feather-check" /> Prerequisites refers
                          to the fundamental courses to complete before taking
                          this particular course.
                        </li>
                        <li>
                          <i className="feather-check" /> Information from the
                          Additional Data section shows up on the course single
                          page.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Modal Area  */}
 
        {/* End Modal Area  */}
        {/* Start Modal Area  */}
      
        {/* End Modal Area  */}

        <div className="rbt-separator-mid">
          <div className="container">
            <hr className="rbt-separator m-0" />
          </div>
        </div>
       
      </main>
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

export default Createcourse;