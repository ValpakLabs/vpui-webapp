import jsonp from 'jsonp';
import redditUrl from './reddit-url.js';

function loadGifs() {
  return new Promise((resolve, reject) => {
    jsonp(redditUrl, {param: 'jsonp'}, function(err, response) {
      if (err) return reject(err);
      resolve(response);
    });
  });
}

export default loadGifs;