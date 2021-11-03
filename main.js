'use strict'
var gSearch = 'beatles'
var gList = []

function init() { //todo
    getList().then(res => renderList(res))
    getWiki().then(wiki => renderWiki(wiki))
}

function renderList(res) {
    var str = ''
    var elList = document.querySelector('.list')
    res.items.map(item => {
        gList.push(item.snippet.thumbnails.default.url)
        str += `<article><img onclick="onImg('${item.id.videoId}')" src="${item.snippet.thumbnails.default.url}"></img> <p> ${item.snippet.title} </p> </article>`})
    elList.innerHTML = str;
    
    console.log(res);
}

function renderWiki(wiki){
    var str = ''
    var elList = document.querySelector('.wiki')
    str += `<p> ${wiki.query.search[0].snippet}</p><p> ${wiki.query.search[1].snippet}</p> </article>`
    elList.innerHTML = str;
  }

function onSearch() {
    var elSearch = document.querySelector('input.search')
    gSearch = elSearch.value;
    console.log(gSearch);
    init();
    onImg(gList[0]);
}
