import portfolio from 'images/portfolio.png';
import anytime from 'images/anytime.png';
import potetos from 'images/potetos.png';
import reactcoin from 'images/reactcoin.png';
import universe from 'images/universe.png';
import stormdigital from 'images/stormdigital.png';
import klm from 'images/KLM.png';
import zebra from 'images/zebra.png';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'Storm Digital',
    description:
      'At the moment I am employed at Storm Digital, where I work as a creative developer. I work with Greensock and Vue on a daily basis, building dynamic display advertisements. Besides creating these, I also help out our Conversion Rate Optimalitzation (CRO) team build their A/B tests.',
    skills: ['HTML5', 'CSS3', 'Javascript', 'Vue', 'Greensock', 'CRO'],
    image: stormdigital,
    alt: 'storm digital',
    links: {
      preview: 'https://www.stormdigital.nl/',
    },
  },
  {
    title: 'KLM 100 Year Campaign <br/><h4 class="storm-digital">created at Storm Digital</h4>',
    description: 'The Dutch airline KLM celebrated their 100th birthday in October 2019. Because of this, they launched a campaign spanning multiple marketing channels. The "Radical" that I built received over 4 million views in a span of 2 days, raising conversions by 34%.',
    skills: ['HTML5', 'CSS3', 'Javascript', 'Greensock'],
    image: klm,
    alt: 'KLM 100 Year Campaign',
    links: {
      preview: 'https://clients.weborama.nl/files/campaigns2/9847998414/187927/NL_nu.nl_201904_index.html',
    },
  },
  {
    title: 'KLM Blue Fly Days Campaign <br/><h4 class="storm-digital">created at Storm Digital</h4>',
    description: 'Every single year, KLM launches a  "Blue Fly Days" campaign. Storm Digitals "Creatives" team designs and builds the digital creatives for this campaign. In November of 2019, I developed the HomePage Take-Over (HPTO) for this campaign.',
    skills: ['HTML5', 'CSS3', 'Javascript', 'Greensock'],
    image: zebra,
    alt: 'zebras in a savannah',
    links: {
      preview: 'https://clients.weborama.nl/files/campaigns2/8461296286/190015/NL_nu.nl_201904_index.html',
    },
  },
  {
    title: 'Anytimers.nl',
    description:
      'This project is a web-app that me and some friends made to track our "anytimers". We are currently working on upscaling it to accomodate for a larger userbase, first focussing on students around our age.<br /><br /> <span style="color:#bbb;">Still a work in progress. Website is a placeholder at the moment!</span>',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS', 'Laravel'],
    image: anytime,
    alt: 'Anytime.rs',
    links: {
      github: 'https://github.com/jengelstengel/anytimers-temp',
      preview: 'https://anytimers.netlify.com/',
    },
  },
  {
    title: 'VV Potetos',
    description: 'This case involved testing, redesigning, and again testing a website from a local soccer club from Groningen. The final design focused mainly on re-doing the information structure and refreshing the look of the website. This project was in co-op with Convident.',
    skills: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'Usability Testing'],
    image: potetos,
    alt: 'VV Potetos',
    links: {
      github: 'https://github.com/jengelstengel/vvpotetos',
      preview: 'https://vvpotetos.nl/',
    },
  },
  {
    title: 'React Coin',
    description: 'React-Coin is a very simple React web app, which I made to develop my React skills. It includes using mutiple different components, calling a cryptocurrency API, and dealing with client/server side routing. It is deployed on Heroku.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Node.JS', 'Heroku'],
    image: reactcoin,
    alt: 'React-Coin',
    links: {
      github: 'https://github.com/jengelstengel/React-coin',
      preview: 'https://twan-react-coin.herokuapp.com/',
    },
  },
  {
    title: 'Parallax Starry Universe',
    description:
      'This tiny website was me starting to develop my skills in CSS. It was created for myself, just to practise. This website uses the CSS property &#39;perspective&#39; to create a parallax effect. The stars are drawn using very small radial gradiensts (2px by 2px), colouring them and repeating them as a pattern.',
    skills: ['HTML5', 'CSS3'],
    image: universe,
    alt: 'Parallax starry Universe',
    links: {
      github: 'https://github.com/jengelstengel/starry-universe',
      preview: 'https://parallax-stars.netlify.com/',
    },
  },
  {
    title: 'Portfolio',
    description: 'This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
    image: portfolio,
    alt: 'Portfolio',
    links: {
      github: 'https://github.com/jengelstengel/portfolio',
      preview: 'https://www.twanmulder.com/',
    },
  },
];
