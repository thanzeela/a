const express = require('express');
const cc = require('../controllers/drivercontroller');
const router = express.Router()


router.get('/driver', cc.getAll)
module.exports = router;