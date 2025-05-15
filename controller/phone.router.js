const express = require('express');
const router = express.Router();
const pController = require('./phone.controller');

router.get('/', pController.getPage);
router.get('/form', pController.getForm);
router.post('/form', pController.postForm);
router.get('/detail/:id', pController.getDetail);
router.get('/api/detail/:id', pController.getDetailAPI);
router.delete('/detail', pController.deleteProduct)

module.exports = router;

