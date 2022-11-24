const express = require('express');
const cc = require('../controllers/bookingcontroller');
const router = express.Router()


router.get('/booking', cc.getAll)
module.exports = router;