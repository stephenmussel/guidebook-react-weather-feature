const axios = require('axios');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('in POST search router!');

    const query = req.body.city;
    console.log('query:', query);

    // then search string can be used in GET
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&cnt=3&appid=${process.env.OPEN_WEATHER}`)
        .then(response => {
            console.log('response:', response);
            res.send(response.data);
        })
        .catch(err => {
            console.log('err in search query:', err);
            res.sendStatus(500);
        });
});

module.exports = router;