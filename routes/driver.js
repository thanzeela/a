const express = require('express');
const dd = require('../controllers/drivercontroller');
const router = express.Router()


router.get('/', dd.index);
router.get('/create', dd.create);
router.post('/create', dd.createPost);
router.get('/update/:id', dd.update);
router.post('/update/:id', dd.updatePost);
router.get('/delete/:id', dd.delete);
router.post('/delete/:id', dd.delete);



module.exports = router;