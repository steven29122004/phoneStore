const express = require('express');
const router = express.Router();
const pController = require('./phone.controller');

router.get('/', pController.getPage);
router.post('/', pController.postForm);
router.get('/detail/:id', pController.getDetail);
router.get('/api/detail/:id', pController.getDetailAPI);
router.delete('/:id', pController.deleteProduct)

module.exports = router;

