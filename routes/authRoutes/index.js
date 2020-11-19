const router = require('express')
    .Router();

const {
    signUpApi,
} = require('../../controllers/authController')


router.post('/signup', signUpApi);


module.exports = router;
