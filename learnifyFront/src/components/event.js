import React from "react";

const Event = ({ event }) => {
  if (!event) {
    return <div>Error: Event data is missing.</div>;
  }

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="rbt-card event-grid-card variation-01 rbt-hover">
        <div className="rbt-card-img">
          <a href={event.detailsLink}>
            <img src={event.imageSrc} alt="Event" />
            <div className="rbt-badge-3 bg-white">
              <span>
                {event.date.day} {event.date.month}
              </span>
              <span>{event.date.year}</span>
            </div>
          </a>
        </div>
        <div className="rbt-card-body">
          <ul className="rbt-meta">
            <li>
              <i className="feather-map-pin" />
              {event.location}
            </li>
            <li>
              <i className="feather-clock" />
              {event.time}
            </li>
          </ul>
          <h4 className="rbt-card-title">
            <a href={event.detailsLink}>{event.title}</a>
          </h4>
          <div className="read-more-btn">
            <a
              className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
              href={event.detailsLink}
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Get Ticket</span>
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
    </div>
  );
};

export default Event;
