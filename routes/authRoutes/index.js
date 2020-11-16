const router = require('express')
    .Router();

const {
    signUpApi,
} = require('../../controllers/userController')


router.post('/signup', signUpApi);


module.exports = router;
