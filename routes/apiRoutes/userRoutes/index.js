const router = require('express').Router();

const {
    getAllUsersApi
} = require('../../../controllers/userController');


router.route('/')
    .get(getAllUsersApi);

module.exports = router;
