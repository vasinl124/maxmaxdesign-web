import React, { Component } from 'react';
import './footer.css';

function getCurentTime(){
  return new Date().getFullYear()
}

class Footer extends Component {
  render() {
    return (
      <section className="footer-section container-fluid">
        <div className="row text-center">
          <div className="col-sm-12">
            <a href="https://www.linkedin.com/in/vasinlimsukhawat">
              <img src="/linkedin.png" className="footer-icon img" alt="Linkedin" />
            </a>
            <a href="https://www.facebook.com/Maxmaxdesign-1844477959144576/">
              <img src="/facebook.png" className="footer-icon img" alt="Facebook" />
            </a>
            <a href="https://github.com/vasinl124/">
              <img src="/github.png" className="footer-icon img" alt="Github" />
            </a>
            <a href="mailto:vasin.limsukhawat@gmail.com">
              <img src="/email.png" className="footer-icon img" alt="Email" />
            </a>
          </div>
          <div className="col-sm-12">
            <img src="/dreamaction.png" className="footer-logo" alt="logo" />
            <div>MaxMaxDesign © {getCurentTime()}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
