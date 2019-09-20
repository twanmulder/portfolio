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
  constructor(props) {
    super(props);
    this.state = {
      activeTitle: 'Projects',
    };
  }
  handleClick(element) {
    this.setState({
      activeTitle: element.innerHTML,
    });
    let titles = document.querySelectorAll('.section-title');
    for (let i = 0; i < titles.length; i++) {}
  }

  render() {
    return (
      <div className="home-container">
        <Navbar />
        <Hero />
        <About statements={statements} />
        <div className="section-wrapper">
          <h2
            onClick={e => this.handleClick(e.target)}
            id="projects"
            className={
              this.state.activeTitle == 'Projects'
                ? 'section-title section-title--active'
                : 'section-title'
            }
          >
            Projects
          </h2>
          <h2
            onClick={e => this.handleClick(e.target)}
            id="articles"
            className={
              this.state.activeTitle == 'Articles'
                ? 'section-title section-title--active'
                : 'section-title'
            }
          >
            Articles
          </h2>
        </div>

        {this.state.activeTitle == 'Projects' ? (
          <Projects projects={projects} />
        ) : null}

        {this.state.activeTitle == 'Articles' ? <Articles /> : null}
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
