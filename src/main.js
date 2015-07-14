import redditApi from './reddit-api.js';
import extractGifs from './extract-gifs.js';
import displayGifs from './display-gifs.js';
import './style.scss';


redditApi()
  .then(extractGifs)
  .then(displayGifs)