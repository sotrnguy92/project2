const router = require('express').Router();

const {
    getAllTodosApi,
    getTodosByUserApi,
    getTodoByTodoIdApi,
    insertTodoToDbApi,
    deleteTodoApi,

} = require('../../../controllers/todoController');


router.route('/')
    .get(getAllTodosApi)
    .post(insertTodoToDbApi)


router.route('/todo/:todoId')
    .get(getTodoByTodoIdApi)
    .delete(deleteTodoApi)

router.route('/:userId')
    .get(getTodosByUserApi)



module.exports = router;
