import React from 'react';

class ContactLinks extends React.PureComponent {
  render() {
    return (
      <div className="contact-links">
        <span>
          <a rel="noopener" target="_blank" href="mailto:twan.mulder@gmail.com">
            twan.mulder@gmail.com
          </a>
        </span>
        <span>
          <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/twanmulder/">
            LinkedIn
          </a>
        </span>
        <span>
          <a rel="noopener" target="_blank" href="https://github.com/twanmulder">
            GitHub
          </a>
        </span>
      </div>
    );
  }
}

export default ContactLinks;
