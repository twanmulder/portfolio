import React from 'react';

import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import About from 'components/About';
import Clientoverview from 'components/Clientoverview';
import Projects from 'components/Projects';
import ContactLinks from 'components/ContactLinks';
import Footer from 'components/Footer';

import projects from 'content/projects';
import statements from 'content/about-me';
import clients from 'content/clients';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="home-container">
        <Navbar />
        <Hero />
        <About statements={statements} />
        <h2 id="clients" className="section-title">Some really cool clients I've been lucky to work for:</h2>
        <Clientoverview clients={clients} />
        <div className="menu-wrapper">
          <h2 id="projects" className="section-title">
            Projects
          </h2>
          <a id="articles" className="section-title" href="https://medium.com/@toktoktwan" target="_blank" rel="noreferrer">
            Articles
          </a>
        </div>
        <Projects projects={projects} />
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
