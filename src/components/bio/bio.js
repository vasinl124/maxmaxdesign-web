import React, { Component } from 'react';
import './bio.css';

function getCurentTime(){
  var now = new Date;
  console.log(now)
  return now.getFullYear()
}
class Bio extends Component {
  render() {
    return (
      <section className="bio-section">
        <div className="container-fluid">
          <div className="bio-row row">
            <div className="col-sm-5"></div>
            <div className="bio-col col-sm-7">
              <h2>Hi! I'm Max Vasin Limsukhawat</h2>
              <h3>Engineer + Musician</h3>
              <h4>Based in Denver, CO</h4>
              <p className="bio-description">
                I am currently working as a Full Stack Web Developer at QSC, Boulder, Colorado USA. I am a Certified ScrumMaster. I am a motivated Full Stack Developer who is passionate about music, technology and its role to shape the future of business and our lifestyle.
                <br />
                <br />
                ** I love to code and making music!
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
              <div>
                Download Resume
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Bio;
