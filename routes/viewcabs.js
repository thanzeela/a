const express = require('express');
const vc = require('../controllers/viewcabscontrollers');

const router = express.Router();

router.get('/viewcabs', vc.viewcabs);
module.exports = router;