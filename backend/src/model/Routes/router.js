const router = require('express').Router();
const userRegistration = require('../../controllers/User-controller')
const userLogin = require('../../controllers/User-login')


router.post('/user-Signup', userRegistration);
router.post('/user-Login', userLogin);


module.exports = router;