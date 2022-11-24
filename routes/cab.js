const express = require('express');
const cc = require('../controllers/cabcontroller');
const router = express.Router()


router.get('/cab', cc.getAll)
module.exports = router;