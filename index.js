const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
const port = 3001

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

app.listen(port, () => {
    console.log(`App is whistlin and listenin on port ${port}`)
})

