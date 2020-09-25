const path = require('path')
const express = require('express')
const publicPath = path.join(__dirname, '../public/')
 app = express()



app.get((req, res, next) => {
    console.log('asodasdi')
})

app.use(express.static(publicPath))
app.listen(9001)