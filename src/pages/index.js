import React from 'react';

import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import About from 'components/About';
import Projects from 'components/Projects';
import ContactLinks from 'components/ContactLinks';
import Footer from 'components/Footer';
import Articles from 'components/Articles';

import projects from 'content/projects';
import statements from 'content/about-me';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="home-container">
        <Navbar />
        <Hero />
        <About statements={statements} />
        <div className="section-wrapper">
          <h2 id="projects" className="section-title section-title--active">
            Projects
          </h2>
          <h2 id="articles" className="section-title">
            Articles
          </h2>
        </div>
        
        {/* <Projects projects={projects} /> */}
        <Articles />
        <div className="background" />
        <h2 id="contact" className="section-title">
          Contact me!
        </h2>
        <ContactLinks />
        <Footer />
      </div>
    );
  }
}
