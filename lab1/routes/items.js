const express = require('express');
const router = express.Router();
const { getItemDetails } = require('../controllers/itemController');

router.get('/:id', getItemDetails);

module.exports = router;
