var httpReq = require('./http-req')

function findAllStringsBetween(text, startStr, endStr) {
  midStrList = []
  while (true) {
    startPos = text.indexOf(startStr)
    endPos = text.indexOf(endStr)

    if (startPos == -1 || endPos == -1) {
      return midStrList
    }
    else {
      midStrList.push(text.slice(startPos + startStr.length, endPos))
      text = text.slice(endPos + 1)
    }
  }
}

function getLinks(htmlText) {
  startStr = "<li class=\"latest-stories__item\">\n              <a href=\""
  endStr = "\">\n                <h3 class=\"latest-stories__item-headline\">"

  links = findAllStringsBetween(htmlText, startStr, endStr)
  return links
}

function getTitles(htmlText) {
  startStr="<h3 class=\"latest-stories__item-headline\">"
  endStr="</h3>\n              </a>\n              <time"

  titles = findAllStringsBetween(htmlText, startStr, endStr)
  return titles
}

function respCb(htmlText) {
  process_html_text(htmlText)
}

function process_html_text(htmlText) {
  links = getLinks(htmlText)
  titles = getTitles(htmlText)
  console.log(links, titles)
  latestNewsList = []
  for (i in links){
    latestNewsList.push({'title':titles[i], 'link':'https://time.com'+links[i]})
  }
  controllerCallback(JSON.stringify(latestNewsList))
}

var controllerCallback;

function getTimeStories(cb) {
  controllerCallback = cb;
  url = 'time.com'
  httpReq({ host: url }, respCb)
}

// getTimeStories(() => { })

module.exports = getTimeStories