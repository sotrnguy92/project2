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
            if (req.params.userId !== 'null') {
                const userTodos = await fetchTodosByUser(req.params.userId);
                res.json(userTodos)
            } else if(req.user.id) {
                const userTodos = await fetchTodosByUser(req.user.id);
                res.json(userTodos)
            }

        }catch (e) {
            console.log(e);
            res.status(400)
                .json(e);
        }
    },

    getTodoByTodoIdApi: async (req, res) => {
        try{
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
            const { todo} = req.body;
            const {id} = req.user;


            const insertedTodo = await insertTodoDb(todo, id);
            res.json(insertedTodo);
        }catch (e) {
            console.log(e);
            res.status(400)
                .json(e);
        }
    },

    deleteTodoApi: async (req, res) => {
        try {
            const deletedTodo = await deleteTodoFromDb(req.params.todoId);
            res.json(deletedTodo);
        }catch (e) {
            console.log(e);
            res.status(400)
                .json(e);
        }

    }



}
