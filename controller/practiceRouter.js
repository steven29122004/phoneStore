const express = require('express');
const router = express.Router();
const pController = require('./practiceController');

router.get('/', pController.getPage);
router.get('/form', pController.getForm);
router.post('/form', pController.postForm);
router.get('/:id', pController.getDetail);
router.delete('/', pController.deleteProduct)

module.exports = router;

