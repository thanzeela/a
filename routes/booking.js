const express = require('express');
const bc = require('../controllers/bookingcontrollers');
const router = express.Router()


router.get('/', bc.bookingindex);
router.get('/create/:cab_id', bc.bookingcreate);
router.post('/create/:cab_id', bc.bookingcreatePost);
router.get('/update/:id', bc.bookingupdate);
router.post('/update/:id', bc.bookingupdatePost);
router.get('/delete/:id', bc.bookingdelete);
router.get('/carddetails/:id', bc.carddetails);
router.get('/viewBooking',bc.viewBooking);
router.post('/viewBooking',bc.searchBookingByDate);

router.get('/invoice/:id', bc.paymentInvoice);



module.exports = router;     