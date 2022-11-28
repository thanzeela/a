const express = require('express');
const cd = require('../controllers/cabcontroller');
const router = express.Router()


router.get('/', cd.index);
router.get('/create', cd.create);
router.post('/create', cd.createPost);
router.get('/update/:id', cd.update);
router.post('/update/:id', cd.updatePost);
router.get('/delete/:id', cd.delete);


module.exports = router;