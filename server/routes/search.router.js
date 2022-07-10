const axios = require('axios');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('in POST search router!');

});

module.exports = router;