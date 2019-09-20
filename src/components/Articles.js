import React from 'react';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasExecuted: false,
    };
  }
  componentDidMount() {
    const script = document.createElement('script');
    const element = document.querySelector('.rss');

    script.src =
      '//rss.bloople.net/?url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40toktoktwan&showicon=true&type=js';
    script.async = true;

    // Dit is dikke whack
    if (!this.state.hasExecuted) {
      Object.defineProperty(document, 'scripts', {
        value: [script],
      });
      this.setState({
        hasExecuted: true,
      });
    }

    element.appendChild(script);
  }

  render() {
    return <div className="rss" />;
  }
}

export default Articles;
