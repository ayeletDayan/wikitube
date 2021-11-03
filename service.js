'use strict'

const YT_KEY = 'AIzaSyBFIVKWWVE1xY6rVCD_g1RbtM7m0sE3Lj8';

function getList() {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${gSearch}`
    return axios.get(url)
        .then(res => res.data)
}


function getWiki() {
    const url = `https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${gSearch}&format=json`
    return axios.get(url)
        .then(wiki => wiki.data)
}

function onImg(url){
    var str = ''
    var elUrl = document.querySelector('.youtube')
    str = `<iframe width="420" height="315" src="https://www.youtube.com/embed/${url}?autoplay=1&mute=1"></iframe>`
    elUrl.innerHTML = str;
}








