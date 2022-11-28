const express = require('express');
const hc = require('../controllers/homecontroller');

const router = express.Router();

router.get('/home', hc.home);
module.exports = router;