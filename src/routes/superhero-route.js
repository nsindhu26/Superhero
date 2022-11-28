const express = require('express');
const router = express.Router();
const { postScore } = require('../controllers/superhero-controller')

router.post('/score', postScore)

module.exports = router;
