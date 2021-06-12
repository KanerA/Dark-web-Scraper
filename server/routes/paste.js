const { Router } = require('express');
const { getPastes } = require('../utils');
const router = Router();

router.get('/get', getPastes);

module.exports = router;