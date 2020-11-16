const {
    fetchTodoById,
    insertTodoDb,
    fetchTodosByUser,
    fetchAllTodos,
    deleteTodoFromDb,
} = require ('../model/todoOrm');

module.exports = {
    getAllTodosApi: async (req, res) => {
        try {
            const allTodos = await fetchAllTodos();
            res.json(allTodos);
        }catch (e) {
            console.log(e);
            res.status(400)
                .json(e);
        }
    },

    getTodosByUserApi: async (req, res) => {
        try {
            console.log(req.params)
            const userTodos = await fetchTodosByUser(req.params.userId);
            res.json(userTodos)
        }catch (e) {
            console.log(e);
            res.status(400)
                .json(e);
        }
    },

    getTodoByTodoIdApi: async (req, res) => {
        try{
            console.log(req.params);
            const todo = await fetchTodoById(req.params.todoId)
            res.json(todo);
        }catch(e) {
            console.log(e);
            res.status(400)
                .json(e);
        }
    },

    insertTodoToDbApi: async (req, res) => {
        try{
            console.log(req.body)
            const { todo, userId} = req.body;
            const insertedTodo = await insertTodoDb(todo, userId);
            res.json(insertedTodo);
        }catch (e) {
            console.log(e);
            res.status(400)
                .json(e);
        }
    },

    deleteTodoApi: async (req, res) => {
        try {
            console.log(req.params);
            const deletedTodo = await deleteTodoFromDb(req.params.todoId);
            console.log("im in the delete todo API ", deletedTodo);
            res.json(deletedTodo);
        }catch (e) {
            console.log(e);
            res.status(400)
                .json(e);
        }

    }



}
