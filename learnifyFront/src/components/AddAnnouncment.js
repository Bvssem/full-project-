import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddAnnouncment.css';
import { toast } from 'react-toastify';


const AddAnnouncement = ({ onClose }) => {
  const [announcement, setAnnouncement] = useState('');
  const [date, setDate] = useState('');
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newAnnouncement = { announcement, date };
      console.log(userId)
      const response = await axios.post(`http://localhost:8080/api/announcements/save?userId=${userId}`, newAnnouncement);
      toast.success('Announcment added successfully')
      // Assuming the response returns the newly created announcement
      navigate('/instructorannouncement'); // Redirect to the instructorannouncement page
    } catch (error) {
      console.error("Error adding announcement:", error);
    }
  };

  return (
    <div className="add-announcement-page">
      <div className="add-announcement-content">
        <h2>Add New Announcement</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Announcement:</label>
            <textarea value={announcement} onChange={(e) => setAnnouncement(e.target.value)} required />
          </div>
          <div>
            <label>Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <button type="submit">Add Announcement</button>
        </form>
      </div>
    </div>
  );
};

export default AddAnnouncement;
