const express = require('express');
const router = express.Router();
const { getPrivacyPage, getAboutPage } = require('../controllers/privacyController');

router.get('/privacy', getPrivacyPage);
router.get('/about', getAboutPage);

module.exports = router;
