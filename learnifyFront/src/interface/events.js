// src/pages/Events.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem("id"));

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/events/approved"
      );
      setEvents(response.data);
      console.log(response.data)

    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Event Grid - Online Courses & Education Bootstrap5 Template</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png" />

      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image" />
        <div className="rbt-banner-content">
          <div className="rbt-banner-content-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item"><a href="index.html">Home</a></li>
                    <li><div className="icon-right"><i className="feather-chevron-right" /></div></li>
                    <li className="rbt-breadcrumb-item active">All Event</li>
                  </ul>
                  <div className="title-wrapper">
                    <h1 className="title mb--0">All Event</h1>
                    <a href="#" className="rbt-badge-2">
                      <div className="image">🎉</div> {events.length} Events
                    </a>
                  </div>
                  <p className="description">Events that help beginner designers become true unicorns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row g-5">
            <div className="rbt-course-grid-column">
              {events.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
    </div>
  );
};

export default Events;
