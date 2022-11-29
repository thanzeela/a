const express = require('express');
const bc = require('../controllers/bookingcontrollers');
const router = express.Router()


router.get('/', bc.bookingindex);
router.get('/create/:cab_id', bc.bookingcreate);
router.post('/create', bc.bookingcreatePost);
router.get('/update/:id', bc.bookingupdate);
router.post('/update/:id', bc.bookingupdatePost);
router.get('/delete/:id', bc.bookingdelete);



module.exports = router;