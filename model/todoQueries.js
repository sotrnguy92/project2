const insertTodoQuery = 'INSERT INTO todos (todo, userId) VALUES (?, ?);';
const deleteTodoByIdQuery = 'DELETE FROM todos WHERE id = ?;';
const allTodosByUserQuery = 'SELECT todo, id FROM todos WHERE userId = ?;';
const findAllTodosQuery = 'SELECT * FROM todos;';
const findTodoByIdQuery = 'SELECT * from todos where id = ?;';


module.exports = {
    insertTodoQuery,
    deleteTodoByIdQuery,
    allTodosByUserQuery,
    findAllTodosQuery,
    findTodoByIdQuery,
}
