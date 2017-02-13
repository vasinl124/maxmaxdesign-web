import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <section className="contact-section">
        <div className="container">
          <div className="contact-row row text-center">
            <div className="col-sm-6">
              <h2>Let's Talk</h2>
              <h4>If you want to turn your idea to reality, I can be your help or just want to know more about me that's fine too!</h4>

              <a  href="mailto:vasin.limsukhawat@gmail.com">
                <button type="button" className="btn message-me">
                  Message Me
                </button>
              </a>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
