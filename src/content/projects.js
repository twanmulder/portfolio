import travlr from 'images/travlr.jpg';
import stockmarketchart from 'images/stockmarketchart.jpg';
import wakeyalarmclock from 'images/wakeyalarmclock.jpg';
import wakeybackgrounds from 'images/wakeybackgrounds.png';
import calculator from 'images/calculator.jpg';
import portfolio from 'images/portfolio.png';
import tomsmetal from 'images/tomsmetal.jpg';
import anytime from 'images/anytime.png';
import neroa from 'images/neroa.png';
import potetos from 'images/potetos.png'

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'AEC',
    description:
      'Neroa and I teamed up to develop an online platform for local residents of Ameland to track their electriciity and gas usage. So far, this project has enrolled in 30 households and is steadily growing. This was my first time working with mutiple corporate teams, which taught me a lot about workflow and release schedules.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'NodeJS', 'Spring'],
    image: neroa,
    links: {
      github: 'https://github.com/vRzn/AEC_frontend',
      preview: 'https://aec.neroa-power.com/',
    },
  },
  {
    title: 'Anytime.rs',
    description:
      'This project is a web-app that me and some friends made to track our "anytimers". We are currently working on upscaling it to accomodate for a larger userbase, first focussing on students around our age.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS', 'Laravel'],
    image: anytime,
    links: {
      github: 'https://github.com/vai0/stockmarketchart',
      preview: 'https://stock.justinchi.me/',
    },
  },
  {
    title: 'VV Potetos',
    description:
      'This case involved testing, redesigning, and again testing a website from a local soccer club from Groningen. The final design focused mainly on re-doing the information structure and refreshing the look of the website.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Usability Testing',
      'PHP'
    ],
    image: potetos,
    links: {
      github: 'https://github.com/vai0/alarmclock',
      preview: 'https://alarmclock.justinchi.me/',
    },
  },
  {
    title: 'Wakey Weather Backgrounds',
    description:
      'Animated backgrounds for when the alarm is triggered in the <a href="https://justinchi.me/alarmclock/">Wakey Alarm Clock</a> app. CSS animations and a bit of JavaScript for the snow and rain. No external libraries.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
    image: wakeybackgrounds,
    links: {
      github: 'https://github.com/vai0/weather-animations',
      preview: 'https://weather-anim.justinchi.me/',
    },
  },
  {
    title: 'Google Calculator',
    description:
      'Applied techniques learned from <a href="https://watchandcode.com/p/practical-javascript">Practical Javascript</a> - writing requirements, iterating, and structuring app as an MVC. This really helped me build a much better foundation in JavaScript for web development. Aside from the Material Components library for the ripples, no frameworks were used. Design is based off the original <a href="https://play.google.com/store/apps/details?id=com.google.android.calculator&hl=en">Google Calculator on Android</a>.',
    skills: [
      'HTML5',
      'CSS3',
      'Sass',
      'JavaScript',
      'ES6',
      'Material Components',
    ],
    image: calculator,
    links: {
      github: 'https://github.com/vai0/material_calculator',
      preview: 'https://calc.justinchi.me/',
    },
  },
  {
    title: 'Portfolio',
    description:
      'This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
    image: portfolio,
    links: {
      github: 'https://github.com/vai0/portfolio',
      preview: 'https://www.justinchi.me/',
    },
  },
];
