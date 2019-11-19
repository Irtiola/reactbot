const path = require('path')
const express = require('express')
const bodyParser = require("body-parser")

const app = express()
require('./routes/dialogFlowRoutes')(app);

app.use(bodyParser.json());

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})