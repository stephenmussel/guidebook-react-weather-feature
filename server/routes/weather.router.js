const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('in router.get');

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=imperial&appid=${process.env.OPEN_WEATHER}`)
        .then(response => {
            console.log('response:', response.data.main); // temp, feels_like, temp_min...
            res.send(response.data)
        })
        .catch(err => {
            console.log('err in fetching data from api:', err);
        })
});

module.exports = router;