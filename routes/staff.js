const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController')

/* http://localhost:3000/staff/ */
router.get('/', staffController.index);

/* http://localhost:3000/staff/:id */
router.get('/:id', staffController.show);

/* http://localhost:3000/staff/ */
router.post('/', staffController.insert);

module.exports = router;
