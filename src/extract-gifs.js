function extractGifs(gifData) {
  return gifData.data.children
    .filter(gif => !gif.data.over_18)
    .map(gif => gif.data.url)
    .filter(url => /.gifv?$/.test(url))
    .map(url => url.replace(/v$/, ''))
}

export default extractGifs;