const express = require('express');
const pd = require('../controllers/paymentcontrollers');
const router = express.Router()


router.get('/', pd.index);
router.get('/create', pd.create);
router.post('/create', pd.createPost);
router.get('/update/:id', pd.update);
router.post('/update/:id', pd.updatePost);
router.get('/delete/:id', pd.delete);
router.post('/delete/:id', pd.delete);



module.exports = router;
