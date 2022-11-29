const { Router } = require('express');

const typeController = require('../controller/typeController.js');

const router = Router();

router.get('/', typeController.index);
router.get('/get', typeController.getTypes);

module.exports = router;