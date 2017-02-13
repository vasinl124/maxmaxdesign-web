import React, { Component } from 'react';
import './App.css';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';
import Footer from './components/footer/footer';
import Bio from './components/bio/bio';
import Work from './components/work/work';
import Contact from './components/contact/contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar collapseOnSelect fixedTop
          className={this.state.scrolled}>
          <Navbar.Header>
            <Navbar.Brand>

            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav pullRight onSelect={this.closeNav}>
              <NavItem>
                <Scrollchor to=""
                  className="nav-link"
                  animate={{duration: 1000}}>
                  Home
                </Scrollchor>
              </NavItem>
              <NavItem>
                <Scrollchor to="about"
                  className="nav-link"
                  animate={{offset: -50, duration: 1000}}>
                  About
                </Scrollchor>
              </NavItem>
              <NavItem>
                <Scrollchor to="work"
                  className="nav-link"
                  animate={{offset: -50, duration: 1000}}>
                  Work
                </Scrollchor>
              </NavItem>
              <NavItem>
                <Scrollchor to="contact"
                  className="nav-link"
                  animate={{duration: 1000}}>
                  Contact
                </Scrollchor>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <section className="App-header video-container">
          <video autoPlay="autoplay" muted loop preload="none" id="bgvid" poster="max-open-poster.png">
            {/* Free HD Stock-Footage and Motion Graphics by CyberWebFX https://www.youtube.com/c/CyberWebFX */}
            <source src="/videos/max-open.mp4" type="video/mp4" />
            <source src="/videos/max-open.webm" type="video/webm" />
          </video>

          <div className="App-center">
            <img src="/maxmaxdesign-logo.png" className="App-logo" alt="logo" />
            <h1 hidden>Max Max Design</h1>
            <h2>Build Anything Impossible</h2>
          </div>

          <div className="learnmore-section">
            <Scrollchor to="about"
              className="nav-link"
              animate={{offset: -50, duration: 1000}}>
              <div className="learnmore-button"></div>
            </Scrollchor>
          </div>
        </section>

        <div id="about">
          <Bio />
        </div>

        <div id="work">
          <Work  />
        </div>

        <div id="contact">
          <Contact id="contact" />
        </div>

        <Footer />
      </div>
    );

  }

  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
      scrolled: 'max-navbar'
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >=50){
      this.setState({scrolled: 'max-navbar max-navbar-scrolled'});
    } else {
      this.setState({scrolled: 'max-navbar'});
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}

export default App;
