import React from 'react';

class Articles extends React.Component {
  addButtons() {
    let titles = document.querySelectorAll('.medium-widget-article__title');
  }

  componentDidMount() {
    window.mediumWidget();
    this.addButtons();
  }

  render() {
    return (
      <div className="rss">
        <div id="medium-widget" />
      </div>
    );
  }
}

export default Articles;
