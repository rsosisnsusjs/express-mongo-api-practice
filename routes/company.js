const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController')

/* http://localhost:3000/company/ */
router.get('/', companyController.index);

module.exports = router;
