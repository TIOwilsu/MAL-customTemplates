const rp = require('request-promise')

const getAnimeList = () => {
    return rp('https://myanimelist.net/animelist/TIOwilsu').then((html) => html)
}

module.exports = {
    getAnimeList
}