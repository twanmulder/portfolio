import React from 'react';
import Typewriter from 'components/Typewriter';
import Scrollchor from 'react-scrollchor';

class Hero extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-container">
        <Typewriter className="hero-title" text="Twan Mulder" />
        <div className="hero-description">
          I'm a Creative Developer and Technical CRO Consultant, currently employed at{' '}
          <a href="https://www.stormdigital.nl/" target="_blank">
            Storm Digital
          </a>.
          <br />
          Building beautiful user experiences is what I love.
          <br />
          Check out my <Scrollchor to="#projects">projects</Scrollchor> below.
        </div>
      </div>
    );
  }
}

export default Hero;
