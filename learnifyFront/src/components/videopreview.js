import React, { useState, useEffect } from "react";
import axios from "axios";

const VideoPreview = () => {
  const [videoLink, setVideoLink] = useState("");

  useEffect(() => {
    // Replace with your backend API endpoint
    const fetchVideoLink = async () => {
      try {
        const response = await axios.get("/api/video-link"); 
        setVideoLink(response.data.videoLink);
      } catch (error) {
        console.error("Error fetching video link:", error);
      }
    };

    fetchVideoLink();
  }, []);

  return (
    <a
      className="video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden mb--15"
      href={videoLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="video-content">
        <img
          className="w-100 rbt-radius"
          src="assets/images/others/video-01.jpg"
          alt="Video"
        />
        <div className="position-to-top">
          <span className="rbt-btn rounded-player-2 with-animation">
            <span className="play-icon" />
          </span>
        </div>
        <span className="play-view-text d-block color-white">
          <i className="feather-eye" /> Preview this course
        </span>
      </div>
    </a>
  );
};

export default VideoPreview;
