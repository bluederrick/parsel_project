const router = require('express').Router();
const userRegistration = require('../controllers/User-controller')
const userLogin = require('../controllers/User-login')

router.route('/user-Signup').post(userRegistration);
router.route('/user-Login').post(userLogin);


module.exports = router;