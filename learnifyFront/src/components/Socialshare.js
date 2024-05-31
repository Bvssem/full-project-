import React from "react";

const Socialshare = () => {
  return (
    <form action="#" className="rbt-profile-row rbt-default-form row row--15">
      <div className="col-12">
        <div className="rbt-form-group">
          <label htmlFor="facebook">
            <i className="feather-facebook" /> Facebook
          </label>
          <input
            id="facebook"
            type="text"
            placeholder="https://facebook.com/"
          />
        </div>
      </div>
      <div className="col-12">
        <div className="rbt-form-group">
          <label htmlFor="twitter">
            <i className="feather-twitter" /> Twitter
          </label>
          <input id="twitter" type="text" placeholder="https://twitter.com/" />
        </div>
      </div>
      <div className="col-12">
        <div className="rbt-form-group">
          <label htmlFor="linkedin">
            <i className="feather-linkedin" /> Linkedin
          </label>
          <input
            id="linkedin"
            type="text"
            placeholder="https://linkedin.com/"
          />
        </div>
      </div>
      <div className="col-12">
        <div className="rbt-form-group">
          <label htmlFor="website">
            <i className="feather-globe" /> Website
          </label>
          <input id="website" type="text" placeholder="https://website.com/" />
        </div>
      </div>
      <div className="col-12">
        <div className="rbt-form-group">
          <label htmlFor="github">
            <i className="feather-github" /> Github
          </label>
          <input id="github" type="text" placeholder="https://github.com/" />
        </div>
      </div>
      <div className="col-12 mt--10">
        <div className="rbt-form-group">
          <a className="rbt-btn btn-gradient" href="#">
            Update Profile
          </a>
        </div>
      </div>
    </form>
  );
};

export default Socialshare;
