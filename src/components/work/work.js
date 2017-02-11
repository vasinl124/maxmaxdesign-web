import React, { Component } from 'react';
import './work.css';

function getCurentTime(){
  var now = new Date;
  console.log(now)
  return now.getFullYear()
}
class Work extends Component {
  render() {
    return (
      <section className="exp-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <img src="/qsc.jpg" className="company-logo" alt="logo" />
              <h2>Full Stack Web Developer</h2>
              <h3>QSC</h3>
              <h4>Oct 2015 - Present</h4>

              <div className="row">
                <div className="col-sm-11">
                  <p>
                    • Full-stack development on web application for monitoring and managing Q-Sys products
                  </p>
                </div>
              </div>

              <div className="right">
                <img src="/html5.png" className="work-skill img" alt="html5" />
                <img src="/js.png" className="work-skill img" alt="JavaScript" />
                <img src="/polymer.png" className="work-skill img" alt="Polymer" />
                <img src="/angular.png" className="work-skill img" alt="Angular" />
                <img src="/nodejs.png" className="work-skill img" alt="Nodejs" />
                <img src="/couchdb.png" className="work-skill img" alt="CouchDB" />
              </div>
            </div>
          </div>

          <hr width="50%" />

          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <img src="/dreamaction.png" className="company-logo" alt="logo" />
              <h2>Co-Founder & Web Developer</h2>
              <h3>DreamAction</h3>
              <h4>Jan 2016 - Present</h4>

              <div className="row">
                <div className="col-sm-11">
                  <p>
                    • Develop/maintain dreamaction.co
                  </p>
                </div>
              </div>

              <div className="right">
                <img src="/html5.png" className="work-skill img" alt="html5" />
                <img src="/js.png" className="work-skill img" alt="JavaScript" />
                <img src="/ghost.png" className="work-skill img" alt="Ghost" />
                <img src="/handlebars.png" className="work-skill img" alt="Handlebars" />
              </div>
            </div>
          </div>

          <hr width="50%" />

          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <img src="/ua.png" className="company-logo" alt="logo" />
              <h2>Software Engineer - Intern</h2>
              <h3>Universal Audio</h3>
              <h4>May - Oct 2015</h4>

              <div className="row">
                <div className="col-sm-11">
                  <p>
                    • Develop Responsive Audio Plugin GUI Framework using HTML5, CSS3, Javascript and jQuery
                    <br />
                    • Develop Email Notification System for Audio Testing using Python, Py.test and HTML5
                  </p>
                </div>
              </div>

              <div className="right">
                <img src="/html5.png" className="work-skill img" alt="html5" />
                <img src="/js.png" className="work-skill img" alt="JavaScript" />
              </div>
            </div>
          </div>

          <hr width="50%" />

        </div>

      </section>
    );
  }
}

export default Work;
