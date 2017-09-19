import React, { Component } from 'react';
import './bio.css';

class Bio extends Component {
  render() {
    return (
      <section className="bio-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5"></div>
            <div className="bio-row col-sm-12 col-md-7">
              <div className="bio-col">
                <h2>Hi! I'm Max Vasin Limsukhawat</h2>
                <h3>Engineer + Musician</h3>
                <h4>Based in Denver, CO</h4>

                <p className="bio-description">
                  I am currently working as a Full Stack Web Developer at QSC, Boulder, Colorado USA. I am a Certified ScrumMaster. I am a motivated Full Stack Developer who is passionate about music, technology and its role to shape the future of business and our lifestyle.
                  <br />
                  <br />
                  ** I love to code and make music!
                </p>

                <div className="bio-skills">
                  <img src="/html5.png" className="bio-skill img" alt="html5" />
                  <img src="/js.png" className="bio-skill img" alt="JavaScript" />
                  <img src="/angular.png" className="bio-skill img" alt="Angular" />
                  <img src="/polymer.png" className="bio-skill img" alt="Polymer" />
                  <img src="/vuejs.png" className="bio-skill img" alt="Vuejs" />
                  <img src="/nodejs.png" className="bio-skill img" alt="Nodejs" />
                  <img src="/couchdb.png" className="bio-skill img" alt="CouchDB" />
                  <img src="/ghost.png" className="bio-skill img" alt="Ghost" />
                  <img src="/handlebars.png" className="bio-skill img" alt="Handlebars" />
                </div>
                <br />
                <div >
                  <a className="resume-link" href="/files/Resume_Vasin.pdf">Download Resume</a>
                  <a className="worksample-link" href="/files/worksamples_maxmax_vasin.pdf">Download Work Samples</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Bio;
