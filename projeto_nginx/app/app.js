const express = require('express');
const app = express();
const PORT = 8000;
const HOST = '0.0.0.0'

app.listen(PORT, HOST, () => {
    console.log('listen http://${HOST}:${PORT}');
})

app.get('/', (req, res) => {
    res.send('FullCycle Rocks!');
})
