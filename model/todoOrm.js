const {
    insertTodoQuery,
    deleteTodoByIdQuery,
    allTodosByUserQuery,
    findAllTodosQuery,
    findTodoByIdQuery,
} = require('./todoQueries');

const connection = require('../config/connection');

const fetchTodoById = async (todoId) => {
    try {
        const [todo] = await connection.query(findTodoByIdQuery, todoId);
        console.log('I am in fetch Todo by ID ',todo[0]);
        return todo[0]
    }catch (e) {
        throw new Error(e)
    }
}

const insertTodoDb = async (todo, userId) => {
    try{
        const [result] = await connection.query(insertTodoQuery,[todo, userId]);
        const insertedTodo = fetchTodoById(result.insertId);
        console.log('i am in insert ToDo',insertedTodo);
        return insertedTodo;
    }catch (e) {
        throw new Error(e);
    }
};


const fetchTodosByUser = async (userId) => {
    try{
        const [result] = await connection.query(allTodosByUserQuery, userId);
        console.log(result);
        return result;
    }catch (e) {
        throw new Error(e);
    }
};

const fetchAllTodos = async () => {
    try{
        const [result] = await connection.query(findAllTodosQuery);
        return result;
    }catch (e) {
        throw new Error(e);
    }
};

const deleteTodoFromDb = async (todoId) => {
    try{
        const deletedTodo = fetchTodoById(todoId);
        await connection.query(deleteTodoByIdQuery, todoId);
        return deletedTodo;
    }catch (e) {
        throw new Error(e);
    }
}




module.exports = {
    fetchTodoById,
    insertTodoDb,
    fetchTodosByUser,
    fetchAllTodos,
    deleteTodoFromDb,
}
