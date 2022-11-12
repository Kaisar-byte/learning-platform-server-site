const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Assignment -10 server is running')
})

app.get(port, (req, res) => {
    console.log(`Assignment started and running on port ${port}`);
})