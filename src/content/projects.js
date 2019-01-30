import portfolio from 'images/portfolio.webp';
import anytime from 'images/anytime.webp';
import neroa from 'images/neroa.webp';
import potetos from 'images/potetos.webp'
import reactcoin from 'images/reactcoin.webp';
import universe from 'images/universe.webp';
import cssdoodle from 'images/cssdoodle.webp';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'Anytimers.nl',
    description:
      'This project is a web-app that me and some friends made to track our "anytimers". We are currently working on upscaling it to accomodate for a larger userbase, first focussing on students around our age.<br /><br /> <span style="color:#bbb;">Still a work in progress. Website is a placeholder at the moment!</span>',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS', 'Laravel'],
    image: anytime,
    alt: 'Anytime.rs',
    links: {
      github: 'https://github.com/jengelstengel/anytimers-temp',
      preview: 'https://ecstatic-hopper-b0d9c5.netlify.com/',
    },
  },
  {
    title: 'React Coin',
    description:
      'React-Coin is a very simple React web app, which I made to develop my React skills. It includes using mutiple different components, calling a cryptocurrency API, and dealing with client/server side routing. It is deployed on Heroku.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Node.JS', 'Heroku'],
    image: reactcoin,
    alt: 'React-Coin',
    links: {
      github: 'https://github.com/jengelstengel/React-coin',
      preview: 'https://twan-react-coin.herokuapp.com/',
    },
  },
  {
    title: 'AEC',
    description:
      'Neroa and I teamed up to develop an online platform for local residents of Ameland to track their electriciity and gas usage. So far, this project has enrolled in 30 households and is steadily growing. This was my first time working with mutiple corporate teams, which taught me a lot about workflow and release schedules. <br /><br /> <span style="color:#bbb;">Source is private, sorry!</span>',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'NodeJS', 'Spring'],
    image: neroa,
    alt: 'Neroa',
    links: {
      preview: 'https://aec.neroa-power.com/',
    },
  },
  {
    title: 'VV Potetos',
    description:
      'This case involved testing, redesigning, and again testing a website from a local soccer club from Groningen. The final design focused mainly on re-doing the information structure and refreshing the look of the website.',
    skills: [
      'PHP',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Usability Testing'
    ],
    image: potetos,
    alt: 'VV Potetos',
    links: {
      github: 'https://github.com/jengelstengel/vvpotetos',
      preview: 'https://vvpotetos.nl/',
    },
  },
  {
    title: 'CSS Doodle',
    description:
      'CSS Doodle is a web component which can be used to draw patterns inside of HTML without the use of any CSS files. For this doodle I set a grid and shape, after which I animated them and based the colour of the circles on the position inside the grid.',
    skills: [
      'HTML5',
      'CSS3',
      'CSS Doodle'
    ],
    image: cssdoodle,
    alt: 'CSS Doodle',
    links: {
      github: 'https://github.com/jengelstengel/doodle-testing',
      preview: 'https://stupefied-mclean-e5b35e.netlify.com/',
    },
  },
  {
    title: 'Parallax Starry Universe',
    description:
      'This tiny website was me starting to develop my skills in CSS. It was created for myself, just to practise. This website uses the CSS property &#39;perspective&#39; to create a parallax effect. The stars are drawn using very small radial gradiensts (2px by 2px), colouring them and repeating them as a pattern',
    skills: [
      'HTML5',
      'CSS3',
    ],
    image: universe,
    alt: 'Parallax starry Universe',
    links: {
      github: 'https://github.com/jengelstengel/starry-universe',
      preview: 'https://xenodochial-curran-eeac49.netlify.com/',
    },
  },
  {
    title: 'Portfolio',
    description:
      'This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
    image: portfolio,
    alt: 'Portfolio',
    links: {
      github: 'https://github.com/jengelstengel/portfolio',
      preview: 'https://www.twanmulder.com/',
    },
  },
];
