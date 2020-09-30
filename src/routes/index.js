const { getAnimeList } = require('../http')

const routes = [
    { 
        url: '/api/v1/myanimelist', 
        handler: getAnimeList
    }
]

const start = (app) => {
    routes.map(({ url, handler }) => {
        app.get(url,(req, res) => {
            handler().then((html) =>  {
                res.status(200).send({ html: html })
            })
        })
    })
}

module.exports = {
    start
}