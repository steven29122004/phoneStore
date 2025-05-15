const express = require('express');
const router = express.Router();
const pController = require('./phone.controller');

router.get('/', pController.getPage);
router.get('/form', pController.getForm);
router.get('/form1', pController.getForm1);
router.post('/form', pController.postForm);
router.get('/:id', pController.getDetail);
router.delete('/', pController.deleteProduct)

module.exports = router;

