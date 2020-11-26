const router = require('express').Router();

const {
    getAllTodosApi,
    getTodosByUserApi,
    getTodoByTodoIdApi,
    insertTodoToDbApi,
    deleteTodoApi,
    getCurrentUserTodoApi,

} = require('../../../controllers/todoController');

const authMiddleware = require('../../../middlewares/authMiddleware');

router.use(authMiddleware);

router.route('/')
    .get(getAllTodosApi)
    .post(insertTodoToDbApi);


router.route('/todo/:todoId')
    .get(getTodoByTodoIdApi)
    .delete(deleteTodoApi);



router.route('/user/')
    .get(getTodosByUserApi);

router.route('/user')
    .get(getCurrentUserTodoApi);



module.exports = router;
