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
          I am a self employed web-developer. My passion is building simple,
          beautiful user experiences.<br />Check out my{' '}
          <Scrollchor to="#projects">side-projects</Scrollchor> below.
        </div>
      </div>
    );
  }
}

export default Hero;
