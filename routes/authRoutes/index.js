const router = require('express')
    .Router();

const {
    signUpApi,
    signInApi
} = require('../../controllers/authController')

const signInMiddleware = require('../../middlewares/signInMiddleware')

router.post('/signup', signUpApi);
router.post('/signin', signInMiddleware, signInApi);


module.exports = router;
