import React from 'react';

class Articles extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    const element = document.querySelector('.rss');

    script.src =
      '//rss.bloople.net/?url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40toktoktwan&showicon=true&type=js';
    script.async = true;

    // Dit is dikke whack
    Object.defineProperty(document, 'scripts', {
      value: [script],
    });
    element.appendChild(script);
  }

  render() {
    return <div className="rss" />;
  }
}

export default Articles;
