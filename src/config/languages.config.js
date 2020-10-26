import { get } from 'lodash';

import welcomeViewLanguages from './languages/welcomeView.languages';
import moviesViewLanguages from './languages/moviesView.languages';
import finishViewLanguages from './languages/finishView.languages';

const data = {
  welcomeView: welcomeViewLanguages,
  moviesView: moviesViewLanguages,
  finishView: finishViewLanguages,
};

const languages = ['pl', 'en'];
const dataKeys = Object.keys(data);

const languagesData = {};
languages.forEach((key) => {
  languagesData[[key]] = {};
});

dataKeys.forEach((page) => {
  for (let i = 0; i < languages.length; i++) {
    const lang = languages[i];
    languagesData[lang][page] = get(data[page], lang);
  }
});

export default languagesData;
