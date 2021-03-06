const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?,?);';
const deleteUserQuery = 'DELETE FROM users WHERE id = ?;';
const findAllUsers = 'SELECT id, username FROM users;';
const findUserByIdQuery = 'SELECT id, username FROM users WHERE id = ?;';
const findUserByUsernameQuery = 'SELECT * FROM users WHERE username = ?;';

module.exports= {
    insertUserQuery,
    findAllUsers,
    deleteUserQuery,
    findUserByIdQuery,
    findUserByUsernameQuery
}


