const axios = require('axios');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('in POST search router!');

    const query = req.body.city;
    console.log('query:', query);
    

});

module.exports = router;