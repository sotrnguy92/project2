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
        console.log('I am in fetch Todo by ID ',todo);
        return todo
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
        // console.log(result);
        return result;
    }catch (e) {
        throw new Error(e);
    }
};

const deleteTodoFromDb = async (todoId) => {
    try{
        const deletedTodo = fetchTodoById(todoId);
        console.log('im in the delete todo from db', deletedTodo);
        await connection.query(deleteTodoByIdQuery, todoId);
        return deletedTodo;
    }catch (e) {
        throw new Error(e);
    }
}

// let test = insertTodoDb('testing another user 1', 3);

// fetchTodosByUser(2);

fetchAllTodos();

// fetchTodoById(1);

// console.log('I am the test', test);

module.exports = {
    fetchTodoById,
    insertTodoDb,
    fetchTodosByUser,
    fetchAllTodos,
    deleteTodoFromDb,
}
