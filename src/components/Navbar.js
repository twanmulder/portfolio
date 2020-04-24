import React from 'react';
import Scrollchor from 'react-scrollchor';

import ThemeToggle from './ThemeToggle';

class Navbar extends React.PureComponent {
  componentDidMount() {
    this.refs.navbar.addEventListener('click', e => {
      if (e.target.innerText === 'Projects') {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
      } else if (e.target.innerText === 'Contact') {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  render() {
    return (
      <div className="navbar-container">
        <ThemeToggle />
        <nav className="navbar" ref="navbar">
          <Scrollchor to="#projects">Projects</Scrollchor>
          <a href="https://thatsanegg.com" target="_blank" rel="noreferrer">
            Articles
          </a>
          <Scrollchor to="#contact">Contact</Scrollchor>
        </nav>
      </div>
    );
  }
}

export default Navbar;
