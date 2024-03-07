var express = require('express')
var router = express.Router()

const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.storedCoureses)
router.get('/trash/courses', meController.restoreCoureses)

module.exports = router
