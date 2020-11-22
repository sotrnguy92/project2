const router = require('express').Router();

const {
    getAllUsersApi,
    getUserByIdApi,
    deleteUserByIdApi
} = require('../../../controllers/userController');

const authMiddleware = require('../../../middlewares/authMiddleware')

router.get('/', authMiddleware, getAllUsersApi)
//
// router.route('/')
//     .get(getAllUsersApi);

router.route('/:userid')
    .get(getUserByIdApi)
    .delete(deleteUserByIdApi);

module.exports = router;
