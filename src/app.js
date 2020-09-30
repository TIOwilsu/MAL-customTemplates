const routes = require('./routes')
const cors = require('cors')
const express = require('express')
const app = express()

const corsOptions = {
    origin: 'http://localhost:9000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
routes.start(app)

app.listen(9001)