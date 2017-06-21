import { lime, deepOrange } from 'material-ui/styles/colors';
import screenPage from '../assets/static/images/screen_page.png';
import screenQuote from '../assets/static/images/screen_quote.png';


export const URL_GIT_HUB = 'https://github.com/4edorov';
export const URL_FACEBOOK = 'https://www.facebook.com/alexander.fedorov.948';

export const STATE_APP = ['Greeting', 'About Me', 'Portfolio', 'My Way', 'Contacts'];

export const COLOR_APP = {
  primary: lime,
  accent: deepOrange,
};

export const PORTFOLIO_WORKS = [
  {
    title: 'Tribute Page',
    imgSrc: screenPage,
    openLink: {
      git: 'https://github.com/4edorov/onepage',
      codepen: 'https://codepen.io/4edorov/pen/yVzMLV',
    },
    iconType: {
      git: 'fa fa-github',
      codepen: 'fa fa-codepen',
    },
  },
  {
    title: 'Random Quote Machine',
    imgSrc: screenQuote,
    openLink: {
      git: 'https://github.com/4edorov/my-quote-generator',
      codepen: 'https://codepen.io/4edorov/pen/bgeOMo',
    },
    iconType: {
      git: 'fa fa-github',
      codepen: 'fa fa-codepen',
    },
  },
];
