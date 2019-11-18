import React from 'react';

class ThemeToggle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }
  activateLightMode() {
    document.body.className = 'light-theme';
    this.setState({ isChecked: false });
  }
  activateDarkMode() {
    document.body.className = 'dark-theme';
    this.setState({ isChecked: true });
  }
  setInitTheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;
    const isLightMode = window.matchMedia('(prefers-color-scheme: light)')
      .matches;
    const isNotSpecified = window.matchMedia(
      '(prefers-color-scheme: no-preference)'
    ).matches;
    const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addListener(e => e.matches && this.activateDarkMode());
    window
      .matchMedia('(prefers-color-scheme: light)')
      .addListener(e => e.matches && this.activateLightMode());

    if (isDarkMode) this.activateDarkMode();
    if (isLightMode) this.activateLightMode();
    if (isNotSpecified || hasNoSupport) {
      console.log(
        'You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.'
      );
      now = new Date();
      hour = now.getHours();
      if (hour < 4 || hour >= 16) {
        this.activateDarkMode();
      }
    }
  }
  toggleTheme() {
    let body = document.body;
    if (body.classList == 'light-theme') {
      this.activateDarkMode();
    } else if (body.classList == 'dark-theme') {
      this.activateLightMode();
    }
  }

  componentDidMount() {
    this.setInitTheme();
  }

  render() {
    const { isChecked } = this.state;
    return (
      <div className="toggle-wrapper">
        <label className="switch" htmlFor="togggleTheme" aria-label="Toggle theme (Light or Dark)">
          <input
            checked={isChecked}
            id="toggleTheme"
            type="checkbox"
            onClick={() => {
              this.toggleTheme();
            }}
          />
          <span className="slider round" />
        </label>
        <p>Toggle theme</p>
      </div>
    );
  }
}

export default ThemeToggle;
