import React, { useState, useEffect } from 'react';
import moment from 'moment'; // Import moment library for date formatting
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './EventDetails.css'; // Import CSS file for styling

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/events/${eventId}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (!event) {
    return <div className="loading">Loading...</div>;
  }

  const handleJoinMeeting = () => {
    const zoomMeetingUrl = `https://zoom.us/join?confno=${event.code}`;
    window.open(zoomMeetingUrl, '_blank');
  };

  return (
    <div className="event-details-container">
      <div className="event-details">
        <h2 className="event-title">{event.eventTitle}</h2>
        <div className="details">
          <p><strong>Zoom Code:</strong> {event.code}</p>
          <p><strong>Event Content:</strong> {event.eventContent}</p>
          <p><strong>Maximum Students:</strong> {event.maximumStudents}</p>
          <p><strong>Difficulty Level:</strong> {event.difficultyLevel}</p>
          <p><strong>Start Date:</strong> {moment(event.startDate).format('MMMM Do YYYY')}</p>
          <p><strong>Start Time:</strong> {event.startTime}</p>
          <p><strong>Certificate:</strong> {event.certificate}</p>
          <p><strong>Approved:</strong> {event.isapproved ? 'Yes' : 'No'}</p>
        </div>
      </div>
      <button className="join-meeting-btn" onClick={handleJoinMeeting}>
        Join Zoom Meeting
      </button>
    </div>
  );
};

export default EventDetails;
