function displayGifs(urls) {
  var div = document.querySelector('#gifs');
  
  div.innerHTML = urls
    .map(url => '<img src="' + url + '"/>')
    .join('\n')
}

export default displayGifs;