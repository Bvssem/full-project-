import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



 <div className="col-xl-4 col-lg-6 col-md-6 col-12">
  <div className="rbt-card event-grid-card variation-01 rbt-hover">
    <div className="rbt-card-img">
      <a href="course-details.html">
        <img src="assets/images/event/grid-type-01.jpg" alt="Card image" />
        <div className="rbt-badge-3 bg-white">
          <span>11 Jan</span>
          <span>2023</span>
        </div>
      </a>
    </div>
    <div className="rbt-card-body">
      <ul className="rbt-meta">
        <li><i className="feather-map-pin" />IAC</li>
        <li><i className="feather-clock" />8:00 am - 5:00 pm</li>
      </ul>
      <h4 className="rbt-card-title"><a href="course-details.html">International Education Fair 2023</a></h4>
      <div className="read-more-btn">
        <a className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round" href="event-details.html">
          <span className="icon-reverse-wrapper">
            <span className="btn-text">Get Ticket</span>
            <span className="btn-icon"><i className="feather-arrow-right" /></span>
            <span className="btn-icon"><i className="feather-arrow-right" /></span>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
