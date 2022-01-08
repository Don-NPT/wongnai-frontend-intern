const express = require('express');
// const request = require('request-promise-native');
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get('/', function (req, res) {
    res.send("Hello api-gateway");
});

app.get('/api/trips', async (req, res) => {

    const keyword = req.query.keyword;
    const response = await fetch(`http://localhost:9000/trips?q=${keyword}`);
    const data = await response.json();

    console.log(data);
    res.send(data);
});

app.listen(3030, () => {
    console.log("Server is running on port 3030");
});