import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Bio from './components/bio/bio';
import Work from './components/work/work';
import Contact from './components/contact/contact';

// import Scroll from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <section className="App-header">
          <div className="App-center">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Max Max Design</h1>
            <h2>Build Anything Impossible</h2>
          </div>

          <div className="learnmore-section">
            <button>V</button>
          </div>
        </section>

        <Bio id="about" />
        <Work id="work" />
        <Contact id="contact" />
        <Footer />
      </div>
    );
  }
}

export default App;
