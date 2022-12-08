const express = require('express');
const dd = require('../controllers/drivercontrollers');
const router = express.Router()
router.get('/driverlogin',dd.driverlogin);

//getting login credentials
router.post('/driverlogin', dd.driverloginPost)

// router.get('home',dd.driverHome)

router.get('/', dd.index);
router.get('/create', dd.create);
router.post('/create', dd.createPost);
router.get('/update/:id', dd.update);
router.post('/update/:id', dd.updatePost);
router.get('/delete/:id', dd.delete);
router.post('/delete/:id', dd.delete);
router.get('/home', dd.driverHome);
router.get('/booking',dd.allBooking);
router.get("/viewBooking",dd.viewBooking);


module.exports = router;