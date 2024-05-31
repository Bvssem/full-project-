// src/components/EventCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="course-grid-3">
      <div className="rbt-card variation-01 rbt-hover">
        <div className="rbt-card-img">
          <Link to={`/event/${event.id}`}>
            <img
              src="assets/images/course/course-online-01.jpg"
              alt="Event image"
            />
            <div className="rbt-badge-3 bg-white">
              <span>{event.discount ? `-${event.discount}%` : ''}</span>
              <span>Off</span>
            </div>
          </Link>
        </div>
        <div className="rbt-card-body">
          <div className="rbt-card-top">
            <div className="rbt-review">
              {/* Add review stars or rating if applicable */}
            </div>
            <div className="rbt-bookmark-btn">
              <a className="rbt-round-btn" title="Bookmark" href="#">
                <i className="feather-bookmark" />
              </a>
            </div>
          </div>
          <h4 className="rbt-card-title">
            <Link to={`/event/${event.id}`}>{event.eventTitle}</Link>
          </h4>
          <ul className="rbt-meta">
            <li>
              <i className="feather-calendar" />
              Start Date: {event.startDate}
            </li>
            <li>
              <i className="feather-users" />
              Max Students: {event.maximumStudents}
            </li>
          </ul>
          <p className="rbt-card-text">
            {event.description}
          </p>
          <div className="rbt-author-meta mb--10">
            <div className="rbt-avater">
              <a href="#">
                <img
                  src="assets/images/client/avatar-02.png"
                  alt="Instructor"
                />
              </a>
            </div>
            <div className="rbt-author-info">
              By <a href="profile.html">Instructor Name</a>
            </div>
          </div>
          <div className="rbt-card-bottom">
            <div className="rbt-price">
              <span className="current-price">{event.price}</span>
            </div>
            <Link className="rbt-btn-link" to={`/event/${event.id}`}>
              Learn More
              <i className="feather-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
